import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import MapGL, { Marker, type MapRef } from "react-map-gl/mapbox";
import imgImage8 from "../../imports/MapPins/ddcdecdf03e734d614f800d710b1bf3e900fbd5c.png";
import { PINS, CATEGORY_COLOR, type Category, type PinDatum } from "./map-pins-data";
import {
  Attraction,
  Plant1,
  Briefcase1,
  ShoppingBagOpen,
  FirstAid1,
  GraduationCap1,
  ForkKnife1,
} from "./map-pins";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;

// Below this on-screen distance (px) to a neighbour a pin switches to the
// compact (vertical) layout so its wide label stops colliding. Tune freely.
const PROXIMITY_PX = 96;

// Badge geometry used for screen-space collision detection.
const ICON = 28;
const GAP = 4;
const TEXT_H = 16;

// category → icon, matching the 6 original pins
const CATEGORY_ICON: Record<Category, () => ReactNode> = {
  Leisure: Plant1,
  Services: Briefcase1,
  Shopping: ShoppingBagOpen,
  Health: FirstAid1,
  Education: GraduationCap1,
  FoodDrink: ForkKnife1,
};

// Live-tunable knobs for the selected-pin animation (DialKit panel "Pin Selection").
type WaveDials = { frequency: number; duration: number; opacity: number; spread: number; radius: number };
type Dials = {
  selectedScale: number;
  dimOpacity: number;
  growMs: number;
  bounce: number;
  pinOrigin: string;
  waves: WaveDials;
};

// Selected-pin animation values, tuned live via DialKit then baked in here.
const PIN_SELECTION: Dials = {
  selectedScale: 1.57,
  dimOpacity: 0.4,
  growMs: 270,
  bounce: 0.65,
  pinOrigin: "bottom",
  waves: {
    frequency: 0.7,
    duration: 2,
    opacity: 0.2,
    spread: 2,
    radius: 22,
  },
};

// Measure label width once per name with the real font (cached).
const _widths = new Map<string, number>();
let _ctx: CanvasRenderingContext2D | null | undefined;
function labelWidth(name: string): number {
  const cached = _widths.get(name);
  if (cached != null) return cached;
  if (_ctx === undefined) {
    _ctx = document.createElement("canvas").getContext("2d");
    if (_ctx) _ctx.font = "500 12px 'General Sans', system-ui, sans-serif";
  }
  const w = _ctx ? _ctx.measureText(name).width : name.length * 6.6;
  _widths.set(name, w);
  return w;
}

type Box = { x1: number; y1: number; x2: number; y2: number };

// Screen bbox of a badge given its projected centre, layout and label width.
// The icon is centred on the coordinate; the label sits to the right
// (horizontal) or under it (compact/selected). Selected badges are larger.
function badgeBox(cx: number, cy: number, compact: boolean, w: number, selected: boolean, scale: number): Box {
  if (selected) {
    const r = (ICON * scale) / 2;
    const lw = w * (16 / 12); // label measured at 12px → ~16px when selected
    return {
      x1: Math.min(cx - r, cx - lw / 2),
      y1: cy - r,
      x2: Math.max(cx + r, cx + lw / 2),
      y2: cy + r + 8 + 24, // gap 8 + line-height 24
    };
  }
  const h = ICON / 2;
  let x1 = cx - h;
  let y1 = cy - h;
  let x2 = cx + h;
  let y2 = cy + h;
  if (compact) {
    x1 = Math.min(x1, cx - w / 2);
    x2 = Math.max(x2, cx + w / 2);
    y2 = Math.max(y2, cy + h + GAP + TEXT_H);
  } else {
    x2 = Math.max(x2, cx + h + GAP + w);
    y1 = Math.min(y1, cy - TEXT_H / 2);
    y2 = Math.max(y2, cy + TEXT_H / 2);
  }
  return { x1, y1, x2, y2 };
}

function overlaps(a: Box, b: Box) {
  return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
}

// Just the icon square (label dropped) — the stage-2 footprint.
function iconBox(cx: number, cy: number): Box {
  const h = ICON / 2;
  return { x1: cx - h, y1: cy - h, x2: cx + h, y2: cy + h };
}

function sameSet(a: Set<string>, b: Set<string>) {
  if (a.size !== b.size) return false;
  for (const id of a) if (!b.has(id)) return false;
  return true;
}

// Reuses the existing pin visuals (Attraction badge + outlined label). The icon
// is the only in-flow element, so it stays locked on the coordinate (anchor
// "center"); the label is absolutely positioned. Selected pins grow, restyle
// their label and emit diverging CSS waves; the rest dim or fade out.
// Animations are pure CSS so they never restart/accumulate on React re-renders.
function MarkerBadge({
  color,
  Icon,
  name,
  compact,
  hidden,
  labelHidden,
  selected,
  dimmed,
  ready,
  onSelect,
  dials,
}: {
  color: string;
  Icon: () => ReactNode;
  name: string;
  compact: boolean;
  hidden: boolean;
  labelHidden: boolean;
  selected: boolean;
  dimmed: boolean;
  ready: boolean;
  onSelect: () => void;
  dials: Dials;
}) {
  const labelClass =
    "absolute [word-break:break-word] not-italic text-center whitespace-nowrap " +
    (selected
      ? "font-['General_Sans:Semibold',sans-serif] text-[16px] leading-[24px] left-1/2 top-[34px] -translate-x-1/2 text-shadow-[0px_1px_4px_rgba(255,255,255,0.9)]"
      : "font-['General_Sans:Medium',sans-serif] text-[12px] leading-[16px] text-shadow-[0px_1px_2px_rgba(0,0,0,0.15)] " +
        (compact
          ? "left-1/2 top-full -translate-x-1/2 mt-[4px]"
          : "left-full top-1/2 -translate-y-1/2 ml-[4px]"));

  // Frequency-driven waves: a new wave is emitted every 1/frequency seconds.
  // The number of concurrent spans is derived from how many waves are alive
  // during one travel `duration` (capped so high values can't flood the DOM).
  const w = dials.waves;
  const waveInterval = 1 / w.frequency;
  const waveCount = Math.min(8, Math.max(1, Math.round(w.duration * w.frequency)));

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className="relative cursor-pointer select-none transition-opacity duration-300"
      style={{
        // Stay invisible until the first post-load declutter has run, so pins
        // appear already-culled instead of flashing in full then dropping out.
        opacity: !ready || hidden ? 0 : selected || !dimmed ? 1 : dials.dimOpacity,
        pointerEvents: !ready || hidden ? "none" : undefined,
      }}
    >
      <div
        className="relative"
        style={
          {
            transformOrigin: dials.pinOrigin, // grows from its base by default
            transform: `scale(${selected ? dials.selectedScale : 1})`,
            transition: `transform ${dials.growMs}ms cubic-bezier(0.34, ${1 + dials.bounce}, 0.64, 1)`,
            // selected → fill the white PinBG balloon with the pin colour (no white edges).
            // The icon stays white via the chip's own --fill-0 override.
            ...(selected ? { "--fill-0": color } : {}),
          } as CSSProperties
        }
      >
        {/* Waves live INSIDE the scaled pin, centred on the icon, so they always
            stay directly behind it regardless of the grow origin/scale. */}
        {selected && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[28px]"
          >
            {Array.from({ length: waveCount }).map((_, i) => (
              <span
                key={i}
                className="absolute inset-0"
                style={
                  {
                    backgroundColor: color,
                    borderRadius: w.radius,
                    opacity: 0,
                    "--pw-opacity": w.opacity,
                    "--pw-spread": w.spread,
                    animation: `pin-wave ${w.duration}s cubic-bezier(0,0,0.2,1) ${i * waveInterval}s infinite`,
                  } as CSSProperties
                }
              />
            ))}
          </span>
        )}
        <Attraction bg={color}>
          <Icon />
        </Attraction>
      </div>

      <p
        className={labelClass}
        style={{
          color,
          transformOrigin: "top", // text grows downward from its top edge
          // same curve + duration as the pin so they scale in sync; label also
          // fades out when the declutter drops it (stage 2 of the overlap rule).
          transition: `font-size ${dials.growMs}ms cubic-bezier(0.34, ${1 + dials.bounce}, 0.64, 1), opacity 200ms ease`,
          opacity: labelHidden ? 0 : 1,
          pointerEvents: labelHidden ? "none" : undefined,
          ...(selected ? {} : { WebkitTextStroke: "2px white", paintOrder: "stroke fill" }),
        }}
      >
        {name}
      </p>
    </div>
  );
}

export default function MapView({
  pins,
  selectedId,
  setSelectedId,
  focusNonce,
}: {
  pins: PinDatum[];
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  focusNonce: number;
}) {
  const mapRef = useRef<MapRef>(null);
  const [compactIds, setCompactIds] = useState<Set<string>>(new Set());
  const [labelHiddenIds, setLabelHiddenIds] = useState<Set<string>>(new Set());
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  // Pins stay hidden until the map has loaded and the first declutter ran.
  const [ready, setReady] = useState(false);

  const dials = PIN_SELECTION;
  const selectedScale = dials.selectedScale;

  // Recompute compact layout + collision hiding from current screen positions.
  // The selected pin is forced compact, enlarged and processed first so it's
  // always kept and any pin overlapping it is hidden for the duration.
  const recompute = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    const pts = pins.map((p) => {
      const { x, y } = map.project([p.lng, p.lat]);
      return { id: p.id, name: p.name, x, y };
    });

    // 1) Close pins → compact (vertical) layout.
    const compact = new Set<string>();
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y) < PROXIMITY_PX) {
          compact.add(pts[i].id);
          compact.add(pts[j].id);
        }
      }
    }

    // 2) Greedy declutter. Selected pin first (top priority) with its enlarged box.
    const ordered = selectedId
      ? [...pts].sort((a, b) => (a.id === selectedId ? -1 : b.id === selectedId ? 1 : 0))
      : pts;
    const placed: Box[] = [];
    const labelHidden = new Set<string>();
    const hidden = new Set<string>();
    for (const pt of ordered) {
      const isSelected = pt.id === selectedId;
      const isCompact = isSelected || compact.has(pt.id);
      // Stage 1: try to keep the full badge (icon + label).
      const fullBox = badgeBox(pt.x, pt.y, isCompact, labelWidth(pt.name), isSelected, selectedScale);
      if (!placed.some((b) => overlaps(b, fullBox))) {
        placed.push(fullBox);
        continue;
      }
      // Stage 2: drop the label, keep just the icon (selected pin never degrades).
      if (!isSelected) {
        const icon = iconBox(pt.x, pt.y);
        if (!placed.some((b) => overlaps(b, icon))) {
          labelHidden.add(pt.id);
          placed.push(icon);
          continue;
        }
      }
      // Stage 3: even the icons collide → hide the pin entirely.
      hidden.add(pt.id);
    }

    setCompactIds((prev) => (sameSet(prev, compact) ? prev : compact));
    setLabelHiddenIds((prev) => (sameSet(prev, labelHidden) ? prev : labelHidden));
    setHiddenIds((prev) => (sameSet(prev, hidden) ? prev : hidden));
  }, [pins, selectedId, selectedScale]);

  // Recompute on selection / scale / filter change (positions don't move, but
  // the set of pins, priority and size do). Runs BEFORE paint so newly shown
  // pins are culled before they ever flash on screen.
  useLayoutEffect(() => {
    recompute();
  }, [recompute]);

  // If the selected pin gets filtered out, clear the selection — otherwise
  // `dimmed` stays true and the remaining visible pins render stuck at dimOpacity.
  useEffect(() => {
    if (selectedId != null && !pins.some((p) => p.id === selectedId)) {
      setSelectedId(null);
    }
  }, [pins, selectedId]);

  // Fly to a pin when a sidebar card requests focus (focusNonce bumps). Keyed on
  // focusNonce only — direct map-pin clicks change selectedId but not focusNonce,
  // so the map doesn't jump on every selection. (deps intentionally minimal)
  useEffect(() => {
    if (focusNonce === 0 || selectedId == null) return;
    const pin = PINS.find((p) => p.id === selectedId);
    if (pin) mapRef.current?.easeTo({ center: [pin.lng, pin.lat], duration: 600 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusNonce]);

  // No token yet → graceful fallback: keep the static image so nothing crashes.
  if (!TOKEN) {
    return (
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgImage8} />
        <div className="absolute bottom-[16px] left-[16px] rounded-[8px] bg-white/85 px-[10px] py-[6px] text-[12px] text-black">
          Добавьте <code>VITE_MAPBOX_TOKEN</code> в <code>.env.local</code> для интерактивной карты
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <MapGL
        ref={mapRef}
        mapboxAccessToken={TOKEN}
        initialViewState={{ longitude: 151.211, latitude: -33.8627, zoom: 15.5 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        onLoad={() => {
          recompute();
          setReady(true);
        }}
        onMove={recompute}
        onClick={() => setSelectedId(null)}
      >
        {pins.map((p) => (
          <Marker key={p.id} longitude={p.lng} latitude={p.lat} anchor="center">
            <MarkerBadge
              color={CATEGORY_COLOR[p.category]}
              Icon={CATEGORY_ICON[p.category]}
              name={p.name}
              compact={compactIds.has(p.id)}
              hidden={hiddenIds.has(p.id)}
              labelHidden={labelHiddenIds.has(p.id)}
              selected={selectedId === p.id}
              dimmed={selectedId != null}
              ready={ready}
              onSelect={() => setSelectedId(selectedId === p.id ? null : p.id)}
              dials={dials}
            />
          </Marker>
        ))}
      </MapGL>
    </div>
  );
}
