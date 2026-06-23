import { useState, type CSSProperties, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import svgPaths from "../../imports/MapPins/svg-1437l3d6ft";
import imgImage12 from "../../imports/MapPins/755539a6754f0706c847973b637b3b7caf76c344.png";
import MapView from "./map-view";
import StreetView from "./street-view";
import PlaceCard from "./place-card";
import { PINS, CATEGORY_COLOR, SUBGROUPS_BY_CATEGORY, type Category } from "./map-pins-data";

// Every category, derived from the colour map (the single source for the 6 keys).
// A full `visible` set ≡ "All"; an empty set ≡ nothing shown.
const ALL_CATEGORIES = Object.keys(CATEGORY_COLOR) as Category[];

/* ---------------- Action buttons ---------------- */
function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1311)" id="Frame">
          <path d={svgPaths.p316092c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p210aa000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M15 18.3333V15.8333" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7272800} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1311">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DesktopButtonSolid() {
  return (
    <div className="aspect-[44/44] bg-white relative rounded-[9999px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)] shrink-0 w-full" data-name="Desktop/Button/Solid">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DesktopButtonSolid1() {
  return (
    <div className="aspect-[44/44] bg-white relative shrink-0 w-full" data-name="Desktop/Button/Solid">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DesktopButtonSolid2() {
  return (
    <div className="aspect-[44/44] bg-white relative shrink-0 w-full" data-name="Desktop/Button/Solid">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[88px] items-center justify-center overflow-clip relative rounded-[999px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)] shrink-0 w-full" data-name="Button-Group">
      <DesktopButtonSolid1 />
      <div className="h-px relative shrink-0 w-[45px]" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 1">
          <path d="M0 0H45V1H0V0Z" fill="var(--fill-0, black)" fillOpacity="0.1" id="Divider" />
        </svg>
      </div>
      <DesktopButtonSolid2 />
    </div>
  );
}

function DesktopButtonSolid3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[9999px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)] shrink-0 size-[44px]" data-name="Desktop/Button/Solid">
      <p className="[word-break:break-word] absolute font-['General_Sans:Medium',sans-serif] leading-[20px] left-[calc(50%-5.5px)] not-italic text-[14px] text-black top-[calc(50%-10px)] whitespace-nowrap">N</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-1/2 top-[calc(50%-15px)] w-[6px]">
        <div className="absolute bottom-1/4 left-[10.06%] right-[10.06%] top-[10.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79225 6.47248">
            <path d={svgPaths.p2edafe00} fill="var(--fill-0, #FF4141)" id="Polygon 13" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+11.89px)] size-[7.778px] top-[calc(50%-10.11px)]">
        <div className="flex-none rotate-45">
          <div className="h-[8px] relative w-[3px]">
            <div className="absolute bottom-1/4 left-[10.69%] right-[10.69%] top-[23.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35879 4.13709">
                <path d={svgPaths.pb074200} fill="var(--fill-0, black)" fillOpacity="0.1" id="Polygon 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+11.89px)] size-[7.778px] top-[calc(50%+11.21px)]">
        <div className="flex-none rotate-135">
          <div className="h-[8px] relative w-[3px]">
            <div className="absolute bottom-1/4 left-[10.69%] right-[10.69%] top-[23.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35879 4.13709">
                <path d={svgPaths.pb074200} fill="var(--fill-0, black)" fillOpacity="0.1" id="Polygon 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-12.11px)] size-[7.778px] top-[calc(50%-10.11px)]">
        <div className="-rotate-45 flex-none">
          <div className="h-[8px] relative w-[3px]">
            <div className="absolute bottom-1/4 left-[10.69%] right-[10.69%] top-[23.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35879 4.13709">
                <path d={svgPaths.pb074200} fill="var(--fill-0, black)" fillOpacity="0.1" id="Polygon 5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-11.11px)] size-[7.778px] top-[calc(50%+10.89px)]">
        <div className="-rotate-135 flex-none">
          <div className="h-[8px] relative w-[3px]">
            <div className="absolute bottom-1/4 left-[10.69%] right-[10.69%] top-[23.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.35879 4.13709">
                <path d={svgPaths.pb074200} fill="var(--fill-0, black)" fillOpacity="0.1" id="Polygon 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-[calc(50%+15px)] top-1/2 w-[8px]">
        <div className="flex-none rotate-90">
          <div className="h-[8px] relative w-[6px]">
            <div className="absolute bottom-1/4 left-[11.05%] right-[11.05%] top-[9.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.67451 5.24169">
                <path d={svgPaths.p30b46d80} fill="var(--fill-0, black)" fillOpacity="0.4" id="Polygon 10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-[calc(50%-15px)] top-1/2 w-[8px]">
        <div className="-rotate-90 flex-none">
          <div className="h-[8px] relative w-[6px]">
            <div className="absolute bottom-1/4 left-[11.05%] right-[11.05%] top-[9.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.67451 5.24169">
                <path d={svgPaths.p15952680} fill="var(--fill-0, black)" fillOpacity="0.4" id="Polygon 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[8px] items-center justify-center left-1/2 top-[calc(50%+15px)] w-[6px]">
        <div className="flex-none rotate-180">
          <div className="h-[8px] relative w-[6px]">
            <div className="absolute bottom-1/4 left-[11.05%] right-[11.05%] top-[9.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.67451 5.24169">
                <path d={svgPaths.p15952680} fill="var(--fill-0, black)" fillOpacity="0.4" id="Polygon 11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start right-[16px] top-1/2 -translate-y-1/2 w-[44px]" data-name="Action-Buttons">
      <DesktopButtonSolid />
      <ButtonGroup />
      <DesktopButtonSolid3 />
    </div>
  );
}

/* ---------------- Distance floating (bottom) ---------------- */
function Check() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="check">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="check">
            <div className="absolute flex items-center justify-center left-0 size-[16px] top-0">
              <div className="flex-none rotate-90">
                <div className="bg-black border border-black border-solid relative rounded-[2px] size-[16px]" />
              </div>
            </div>
            <div className="absolute flex h-[8px] items-center justify-center left-[6px] top-[4px] w-[5px]">
              <div className="flex-none rotate-90">
                <div className="h-[5px] relative w-[8px]">
                  <div className="absolute inset-[-15%_-9.38%_-20.43%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50001 6.77135">
                      <path d={svgPaths.p1386a780} id="Vector 233" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">5 km</p>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="check">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
        <div className="-rotate-90 flex-none">
          <div className="relative size-[16px]" data-name="check">
            <div className="absolute flex items-center justify-center left-0 size-[16px] top-0">
              <div className="flex-none rotate-90">
                <div className="bg-black border border-black border-solid relative rounded-[2px] size-[16px]" />
              </div>
            </div>
            <div className="absolute flex h-[8px] items-center justify-center left-[6px] top-[4px] w-[5px]">
              <div className="flex-none rotate-90">
                <div className="h-[5px] relative w-[8px]">
                  <div className="absolute inset-[-15%_-9.38%_-20.43%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50001 6.77135">
                      <path d={svgPaths.p1386a780} id="Vector 233" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[20px]">10 km</p>
      </div>
    </div>
  );
}

function CheckBoxGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="CheckBox-Group">
      <Check />
      <Check1 />
    </div>
  );
}

function DistanceFloating() {
  return (
    <div className="absolute bg-white bottom-[16px] content-stretch flex gap-[12px] h-[44px] items-center justify-center right-[16px] overflow-clip px-[24px] py-[12px] rounded-[99px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)]" data-name="Distance-Floating">
      <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Distance:</p>
      <CheckBoxGroup />
    </div>
  );
}

/* ---------------- Category filter chips ---------------- */
// "All" chip — its own geometry (no icon). Active look = the original bg-black pill.
function AllChip({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`content-stretch flex h-[36px] items-center justify-center min-w-[44px] overflow-clip p-[12px] relative rounded-[99px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)] shrink-0 cursor-pointer ${active ? "bg-black" : "bg-white"}`}
      data-name="Distance-Floating"
    >
      <div className={`[word-break:break-word] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${active ? "text-white" : "text-black"}`}>
        <p className="leading-[20px]">All</p>
      </div>
    </button>
  );
}

// Generic category chip. The stroke icons read `var(--stroke-0, black)`, so
// overriding that variable on the container flips the icon to white when active.
function CategoryChip({ label, Icon, active, onClick }: { label: string; Icon: () => ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={active ? ({ "--stroke-0": "white" } as CSSProperties) : undefined}
      className={`content-stretch flex gap-[4px] h-[36px] items-center justify-center min-w-[52px] overflow-clip pl-[8px] pr-[12px] py-[12px] relative rounded-[99px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),0px_0px_0px_1px_rgba(0,0,0,0.02)] shrink-0 cursor-pointer ${active ? "bg-black" : "bg-white"}`}
      data-name="Distance-Floating"
    >
      <Icon />
      <div className={`[word-break:break-word] flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${active ? "text-white" : "text-black"}`}>
        <p className="leading-[20px]">{label}</p>
      </div>
    </button>
  );
}

function ForkKnife() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ForkKnife">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1296)" id="ForkKnife">
          <g id="Vector" />
          <path d="M6.25 3.125V6.875" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.25 10V17.5" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p28f34f00} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p24bdad80} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1296">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ShoppingBag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1257)" id="ShoppingBag">
          <g id="Vector" />
          <path d={svgPaths.p10f80380} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2455aa00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1257">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Briefcase() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1248)" id="Briefcase">
          <g id="Vector" />
          <path d={svgPaths.p4cfdd00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2d0f3600} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p247aaf00} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.75 8.75H11.25" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1248">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Plant() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plant">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1283)" id="Plant">
          <g id="Vector" />
          <path d={svgPaths.p23756e80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1cb6cf00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.375 10L9.375 15" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a292080} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1283">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FirstAid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FirstAid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FirstAid">
          <path d={svgPaths.pe612400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function GraduationCap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GraduationCap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1243)" id="GraduationCap">
          <path d={svgPaths.p32641b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 7.5L14.375 9.83359V18.75" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2cf1b500} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1243">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// chip label ↔ Category enum (+ its stroke icon), in the original display order.
const CATEGORY_CHIPS: { category: Category; label: string; Icon: () => ReactNode }[] = [
  { category: "FoodDrink", label: "Food & Drink", Icon: ForkKnife },
  { category: "Shopping", label: "Shopping", Icon: ShoppingBag },
  { category: "Services", label: "Services", Icon: Briefcase },
  { category: "Leisure", label: "Leisure & Recreation", Icon: Plant },
  { category: "Health", label: "Health", Icon: FirstAid },
  { category: "Education", label: "Education", Icon: GraduationCap },
];

function CategoryChips({
  visible,
  onToggleAll,
  onToggleChip,
}: {
  visible: Set<Category>;
  onToggleAll: () => void;
  onToggleChip: (c: Category) => void;
}) {
  const isAll = visible.size === ALL_CATEGORIES.length;
  return (
    <div className="absolute left-[16px] right-[16px] top-[16px]" data-name="Button-Group">
      <div className="content-stretch flex gap-[4px] items-center overflow-x-auto p-[12px] -m-[12px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <AllChip active={isAll} onClick={onToggleAll} />
        {CATEGORY_CHIPS.map((c) => (
          <CategoryChip
            key={c.category}
            label={c.label}
            Icon={c.Icon}
            active={!isAll && visible.has(c.category)}
            onClick={() => onToggleChip(c.category)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Pins ---------------- */
function PinBG() {
  return (
    <div className="absolute inset-[0_0_-9.38%_0]" data-name="BG">
      <div className="absolute inset-[-26.12%_-35.71%_-39.18%_-35.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 50.6269">
          <g filter="url(#filter0_dd_1_1241)" id="BG">
            <path d={svgPaths.p58a1780} fill="var(--fill-0, white)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.6269" id="filter0_dd_1_1241" width="48" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1241" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="effect1_dropShadow_1_1241" mode="normal" result="effect2_dropShadow_1_1241" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1241" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function Plant1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plant">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1237)" id="Plant">
          <g id="Vector" />
          <path d={svgPaths.p39e3ab80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1237">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Briefcase1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Briefcase">
          <path d={svgPaths.p3e501f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function ShoppingBagOpen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ShoppingBagOpen">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1358)" id="ShoppingBagOpen">
          <g id="Vector" />
          <path d={svgPaths.pd5ba980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1358">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function FirstAid1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FirstAid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FirstAid">
          <path d={svgPaths.p2cd45db0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function GraduationCap1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GraduationCap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="GraduationCap">
          <path d={svgPaths.p115d5e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export function ForkKnife1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ForkKnife">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1227)" id="ForkKnife">
          <g id="Vector" />
          <path d={svgPaths.p1a449f80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1227">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Attraction({ bg, children }: { bg: string; children: ReactNode }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Attraction">
      <PinBG />
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 size-[24.5px] rounded-[16px] top-1/2"
        data-name="Inside"
        // keep the icon white even when an ancestor recolors --fill-0 (selected pin)
        style={{ backgroundColor: bg, "--fill-0": "white" } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------------- Map panel ---------------- */
function MapPanel({
  visible,
  onToggleAll,
  onToggleChip,
  selectedId,
  setSelectedId,
  focusNonce,
}: {
  visible: Set<Category>;
  onToggleAll: () => void;
  onToggleChip: (c: Category) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  focusNonce: number;
}) {
  const visiblePins = PINS.filter((p) => visible.has(p.category));
  return (
    <div className="relative flex-1 min-w-0 h-[55vh] lg:h-auto overflow-clip rounded-[24px]" data-name="interactive">
      <MapView pins={visiblePins} selectedId={selectedId} setSelectedId={setSelectedId} focusNonce={focusNonce} />
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 rounded-[24px] pointer-events-none" />
      <CategoryChips visible={visible} onToggleAll={onToggleAll} onToggleChip={onToggleChip} />
      <ActionButtons />
      <StreetView />
      <DistanceFloating />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Counter() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[24px] items-center justify-center px-[12px] relative rounded-[100px] shrink-0" data-name="Counter">
      <p className="[word-break:break-word] font-['General_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">10</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center shrink-0" data-name="tabs">
      <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Desktop/Tabs">
        <p className="[word-break:break-word] font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Overview</p>
      </div>
      <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Desktop/Tabs">
        <p className="[word-break:break-word] font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Offices</p>
      </div>
      <div className="bg-[rgba(0,0,0,0.2)] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Desktop/Tabs">
        <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Maps</p>
      </div>
      <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[24px] relative rounded-[12px] shrink-0" data-name="Desktop/Tabs">
        <p className="[word-break:break-word] font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Favorites</p>
        <Counter />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pf942a70} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3de9ee00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pbdf4440} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1fb905c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2f28c80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function DesktopButtonGhost() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center rounded-[999px] size-[44px] shrink-0" data-name="Desktop/Button/Ghost">
      <Frame3 />
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="flex items-center justify-between gap-[16px] h-[64px] px-[24px] shrink-0 w-full">
      <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic text-[20px] text-white whitespace-nowrap shrink-0 hidden sm:block">Quay Quarter Tower</p>
      <div className="flex-1 min-w-0 flex justify-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Tabs />
      </div>
      <DesktopButtonGhost />
    </div>
  );
}

/* ---------------- Sidebar attraction groups ---------------- */
function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path" />
          <path d={svgPaths.p52c2700} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ForkKnife2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ForkKnife">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1211)" id="ForkKnife">
          <g id="Vector" />
          <path d="M6.25 3.125V6.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.25 10V17.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p28f34f00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p24bdad80} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ShoppingBag1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ShoppingBag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1185)" id="ShoppingBag">
          <g id="Vector" />
          <path d={svgPaths.p10f80380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2455aa00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1185">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Briefcase2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1332)" id="Briefcase">
          <g id="Vector" />
          <path d={svgPaths.p4cfdd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2d0f3600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p247aaf00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.75 8.75H11.25" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1332">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Plant2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Plant">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1178)" id="Plant">
          <g id="Vector" />
          <path d={svgPaths.p23756e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1cb6cf00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.375 10L9.375 15" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a292080} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1178">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FirstAid2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FirstAid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FirstAid">
          <path d={svgPaths.pe612400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function GraduationCap2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="GraduationCap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1173)" id="GraduationCap">
          <path d={svgPaths.p32641b80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 7.5L14.375 9.83359V18.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2cf1b500} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1173">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CounterSm({ count }: { count: number }) {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex h-[24px] items-center justify-center px-[8px] relative rounded-[100px] shrink-0" data-name="Counter">
      <p className="[word-break:break-word] font-['General_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">{count}</p>
    </div>
  );
}

function Toggle({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`h-[24px] relative rounded-[7499.25px] shrink-0 w-[44px] cursor-pointer ${active ? "bg-[rgba(255,255,255,0.4)]" : "bg-[rgba(0,0,0,0.2)]"}`}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className={`absolute bg-white rounded-[7499.25px] size-[20px] top-[2px] transition-all ${active ? "right-[2px]" : "left-[2px]"}`} />
      </div>
      {/* Border ring only in the ON state (matches the Figma off variant). */}
      {active && (
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[7499.25px]" />
      )}
    </button>
  );
}

function AttractionGroup({
  icon,
  label,
  count,
  active,
  expanded,
  onToggle,
  onToggleExpand,
  children,
}: {
  icon: ReactNode;
  label: string;
  count: number;
  active: boolean;
  expanded: boolean;
  onToggle: () => void;
  onToggleExpand: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Attraction-Group">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
        <button type="button" onClick={onToggleExpand} className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative cursor-pointer" data-name="Title-Group">
          <ChevronDown
            size={20}
            strokeWidth={2}
            aria-hidden
            className={`shrink-0 text-white transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {icon}
          <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{label}</p>
          <CounterSm count={count} />
        </button>
        <Toggle active={active} onClick={onToggle} />
      </div>
      {expanded && children && (
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Group-Content">
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------------- Sidebar ---------------- */
function EyeSlash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="EyeSlash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_1303)" id="EyeSlash">
          <g id="Vector" />
          <path d="M3.75 3.125L16.25 16.875" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p11fcde80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p39371718} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16956010} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12c49560} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1303">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Open-eye icon (Figma node 3751:21932), shown on the "Show all" state.
function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_eye)" id="Eye">
          <path d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375Z" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_eye">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Sidebar rows mirror the chip categories, but with the white-stroke icons.
const SIDEBAR_GROUPS: { category: Category; label: string; Icon: () => ReactNode }[] = [
  { category: "FoodDrink", label: "Food & Drink", Icon: ForkKnife2 },
  { category: "Shopping", label: "Shopping", Icon: ShoppingBag1 },
  { category: "Services", label: "Services", Icon: Briefcase2 },
  { category: "Leisure", label: "Leisure & Recreation", Icon: Plant2 },
  { category: "Health", label: "Health", Icon: FirstAid2 },
  { category: "Education", label: "Education", Icon: GraduationCap2 },
];

function Sidebar({
  visible,
  onToggleCategory,
  allHidden,
  onToggleAllVisibility,
  selectedId,
  onSelectPin,
}: {
  visible: Set<Category>;
  onToggleCategory: (c: Category) => void;
  allHidden: boolean;
  onToggleAllVisibility: () => void;
  selectedId: string | null;
  onSelectPin: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState<Set<Category>>(new Set());
  const toggleExpand = (c: Category) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  return (
    <div className="flex flex-col gap-[24px] w-full lg:w-[439px] shrink-0 lg:overflow-y-auto px-[24px] lg:pr-[24px] lg:pl-0 pb-[24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-name="Surrounding">
      <div className="flex items-center justify-between w-full pt-[24px]">
        <div className="content-stretch flex items-center relative shrink-0" data-name="title">
          <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Surroundings</p>
        </div>
        {/* Hide all ⇄ Show all: when nothing is visible, flips to "Show all". */}
        <button type="button" onClick={onToggleAllVisibility} className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
          {allHidden ? <Eye /> : <EyeSlash />}
          <p className="[word-break:break-word] font-['General_Sans:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{allHidden ? "Show all" : "Hide all"}</p>
        </button>
      </div>
      <div className="flex flex-col gap-[24px] items-start w-full" data-name="Surrounding-Content">
        {SIDEBAR_GROUPS.map((g) => {
          const subgroups = SUBGROUPS_BY_CATEGORY[g.category] ?? [];
          const count = subgroups.reduce((n, sg) => n + sg.places.length, 0);
          return (
            <AttractionGroup
              key={g.category}
              icon={<g.Icon />}
              label={g.label}
              count={count}
              active={visible.has(g.category)}
              expanded={expanded.has(g.category)}
              onToggle={() => onToggleCategory(g.category)}
              onToggleExpand={() => toggleExpand(g.category)}
            >
              {subgroups.map((sg) => (
                <div key={sg.name} className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="SubGroup">
                  <p className="[word-break:break-word] font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{sg.name}</p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Cards">
                    {sg.places.map((place) => (
                      <PlaceCard
                        key={place.id}
                        name={place.name}
                        selected={place.id === selectedId}
                        onClick={() => onSelectPin(place.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </AttractionGroup>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Root ---------------- */
export default function MapPins() {
  // Single source of truth: the set of visible categories. Full set ≡ "All";
  // empty set ≡ nothing shown. Chips and sidebar both read/write this.
  const [visible, setVisible] = useState<Set<Category>>(() => new Set(ALL_CATEGORIES));

  // Selected pin lifted here so a sidebar card can drive map selection. focusNonce
  // bumps on a card click to trigger a fly-to in MapView (plain pin clicks don't).
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusNonce, setFocusNonce] = useState(0);

  // Card click: make sure the pin's category is shown, select it, and fly to it.
  const focusPin = (id: string) => {
    const pin = PINS.find((p) => p.id === id);
    if (!pin) return;
    setVisible((prev) => (prev.has(pin.category) ? prev : new Set(prev).add(pin.category)));
    setSelectedId(id);
    setFocusNonce((n) => n + 1);
  };

  // "All" chip: full → empty (hide everything); otherwise → full (show all).
  const onToggleAll = () =>
    setVisible((prev) => (prev.size === ALL_CATEGORIES.length ? new Set() : new Set(ALL_CATEGORIES)));

  // Chip click = "filter to this": from All, show only C; otherwise toggle membership.
  const onToggleChip = (c: Category) =>
    setVisible((prev) => {
      if (prev.size === ALL_CATEGORIES.length) return new Set([c]);
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });

  // Sidebar toggle = "show/hide this": always flip C's membership (from All → all but C).
  const onToggleCategory = (c: Category) =>
    setVisible((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });

  // "Hide all" ⇄ "Show all" button: from anything-visible → empty; from empty → full.
  const onToggleAllVisibility = () =>
    setVisible((prev) => (prev.size === 0 ? new Set(ALL_CATEGORIES) : new Set()));

  return (
    <div className="relative bg-[#1a1a1a] size-full overflow-hidden flex flex-col" data-name="Map Pins">
      <div className="absolute -translate-x-1/2 blur-[200px] h-[1178px] left-1/2 pointer-events-none top-[-139px] w-[2071px] opacity-80">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[24px] size-full" src={imgImage12} />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <HeaderBar />
        <div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[24px] flex-1 min-h-0 px-[8px] pb-[8px] overflow-y-auto lg:overflow-hidden">
          <MapPanel
            visible={visible}
            onToggleAll={onToggleAll}
            onToggleChip={onToggleChip}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            focusNonce={focusNonce}
          />
          <Sidebar
            visible={visible}
            onToggleCategory={onToggleCategory}
            allHidden={visible.size === 0}
            onToggleAllVisibility={onToggleAllVisibility}
            selectedId={selectedId}
            onSelectPin={focusPin}
          />
        </div>
      </div>
    </div>
  );
}
