import svgPaths from "./svg-pbg5bh68ud";

function Plant() {
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

function Inside() {
  return (
    <div className="-translate-y-1/2 absolute aspect-[24.5/24.5] bg-[#4fa46c] content-stretch flex items-center justify-center left-[7.14%] p-[8px] right-[7.14%] rounded-[16px] top-1/2" data-name="Inside">
      <Plant />
    </div>
  );
}

function Attraction() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Attraction">
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
      <Inside />
    </div>
  );
}

export default function Pin() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full" data-name="Pin">
      <Attraction />
      <p className="[word-break:break-word] font-['General_sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d8842] text-[12px] text-center text-shadow-[0px_1px_2px_rgba(0,0,0,0.15)] whitespace-nowrap">Attraction name</p>
    </div>
  );
}