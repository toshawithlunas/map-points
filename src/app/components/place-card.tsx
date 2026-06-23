import { forwardRef, type ReactNode } from "react";

/* ---- Card info icons (Figma 3796:10479) — white stroke @ 0.8 opacity ---- */
function IconDistance() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path
        d="M5.83333 2.91667C10 1.25 11.6667 5 8.33333 6.25C1.25 8.33333 1.66667 12.5 4.16667 13.3333C8.33333 15 11.6667 5 15.8333 7.5C20 10 16.25 18.75 12.5 17.5C8.33333 15.4167 12.9167 8.33333 17.5 15.8333"
        stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
    </svg>
  );
}

function IconWalk() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d="M3.33333 13.3333V11.35C3.33333 9.58333 2.475 8.75 2.5 6.66667C2.525 4.4 3.74167 1.66667 6.25 1.66667C7.80833 1.66667 8.33333 3.16667 8.33333 4.58333C8.33333 7.175 6.66667 9.3 6.66667 11.8167V13.3333C6.66667 13.7754 6.49107 14.1993 6.17851 14.5118C5.86595 14.8244 5.44203 15 5 15C4.55797 15 4.13405 14.8244 3.82149 14.5118C3.50893 14.1993 3.33333 13.7754 3.33333 13.3333Z" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M16.6667 16.6667V14.6833C16.6667 12.9167 17.525 12.0833 17.5 10C17.475 7.73333 16.2583 5 13.75 5C12.1917 5 11.6667 6.5 11.6667 7.91667C11.6667 10.5083 13.3333 12.6333 13.3333 15.15V16.6667C13.3333 17.1087 13.5089 17.5326 13.8215 17.8452C14.134 18.1577 14.558 18.3333 15 18.3333C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667Z" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M13.3333 14.1667H16.6667" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M3.33333 10.8333H6.66667" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function IconDrive() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d="M17.5 6.66667L15.8333 8.33333L14.5833 5.25C14.4655 4.93445 14.2547 4.66202 13.9789 4.46863C13.7031 4.27524 13.3752 4.16996 13.0383 4.16667H7C6.66042 4.15887 6.32656 4.25501 6.04314 4.44222C5.75972 4.62943 5.54026 4.89877 5.41417 5.21417L4.16667 8.33333L2.5 6.66667" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M5.83333 11.6667H5.84167" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M14.1667 11.6667H14.175" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M15.8333 8.33333H4.16667C3.24619 8.33333 2.5 9.07953 2.5 10V13.3333C2.5 14.2538 3.24619 15 4.16667 15H15.8333C16.7538 15 17.5 14.2538 17.5 13.3333V10C17.5 9.07953 16.7538 8.33333 15.8333 8.33333Z" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M4.16667 15V16.6667" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M15.8333 15V16.6667" stroke="var(--stroke-0, white)" strokeOpacity="0.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function InfoCell({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Info-Cell">
      <div className="relative shrink-0 size-[20px]">{icon}</div>
      <p className="[word-break:break-word] font-['General_Sans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">{text}</p>
    </div>
  );
}

// Place card (Figma 3796:10479): name + distance / walk / drive (placeholder values).
// Clicking selects the matching pin on the map and flies to it.
const PlaceCard = forwardRef<
  HTMLButtonElement,
  { name: string; selected: boolean; onClick: () => void }
>(function PlaceCard({ name, selected, onClick }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={`content-stretch flex flex-col gap-[12px] items-start w-full text-left px-[20px] py-[12px] relative rounded-[16px] border border-solid cursor-pointer transition-colors ${
        selected
          ? "bg-[rgba(255,255,255,0.2)] border-white"
          : "bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.2)]"
      }`}
      data-name="card"
    >
      <p className="[word-break:break-word] font-['General_Sans:Medium',sans-serif] leading-[24px] min-w-full not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white">{name}</p>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Info-Group">
        <InfoCell icon={<IconDistance />} text="1.5 km" />
        <InfoCell icon={<IconWalk />} text="5 min" />
        <InfoCell icon={<IconDrive />} text="5 min" />
      </div>
    </button>
  );
});

export default PlaceCard;
