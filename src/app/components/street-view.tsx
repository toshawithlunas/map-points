import streetViewThumb from "../assets/street-view-thumb.jpg";

// Fixed Street View point. TODO: заменить на точку пользователя из Google Maps
// (если пришлёт URL вида …/@LAT,LNG,3a,…h,…t/ — берём из него lat/lng + heading/pitch).
const STREET_VIEW_POINT = { lat: -33.8627, lng: 151.211 };

// Keyless Google Maps Street View link — opens a separate page, no API key needed.
// (Later this can become an embedded Embed-API panorama in a modal, once a Google
// key + modal design exist; the point/URL stays the same.)
const streetViewUrl =
  "https://www.google.com/maps/@?api=1&map_action=pano" +
  `&viewpoint=${STREET_VIEW_POINT.lat},${STREET_VIEW_POINT.lng}`;

// 360° icon (Figma node 3796:10438) — white stroke via --stroke-0 default.
function Rotate360() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="rotate-360-square">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d="M9.65061 15.2383L11.3991 13.4897L9.65061 11.7412" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.0163 12.6095C15.1256 12.1825 15.9063 11.175 16.0426 9.99412C16.0426 8.0481 13.3381 6.47057 10.0022 6.47056C6.66622 6.47055 3.96173 8.04814 3.96174 9.99414C3.96174 11.9401 6.66612 13.5177 10.0021 13.5177C10.4479 13.5161 10.8932 13.4852 11.3349 13.4252" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Street View button (Figma 3796:10437): 64×64 glassy pill — blurred street photo
// behind a dark overlay + thin white border + centred 360° icon. Sits above the
// Distance pill (right:16, bottom:72). Opens Street View in a new tab.
export default function StreetView() {
  return (
    <a
      href={streetViewUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Street View"
      className="absolute bottom-[72px] right-[16px] block size-[64px] overflow-clip rounded-[12px] border border-[rgba(255,255,255,0.4)] border-solid cursor-pointer"
      data-name="StreetView"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={streetViewThumb} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[12px]" />
      </div>
      <Rotate360 />
    </a>
  );
}
