import svgPaths from "./svg-t3q7qhfhj2";
import imgNav from "figma:asset/c24ba1b4efbae3f4996529ac70d19155b25c6125.png";

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[34.985px] ml-0 mt-0 relative w-[34.574px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5742 34.9849">
        <g id="Group 1321318241">
          <path d={svgPaths.p1d44dd80} fill="var(--fill-0, #2362DD)" id="Vector 18 (Stroke)" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3bed6180} fill="var(--fill-0, #AD81F1)" fillRule="evenodd" />
            <path d={svgPaths.p1e41b900} fill="var(--fill-0, #AD81F1)" />
          </g>
          <path d={svgPaths.p28544600} fill="var(--fill-0, #0080FF)" id="Subtract" />
          <path d={svgPaths.p36c62c00} fill="var(--fill-0, #141417)" id="Subtract (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[28.246px] ml-[3.83px] mt-[7.54px] relative w-[25.075px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0754 28.2465">
        <g id="Group 1321318248">
          <path d={svgPaths.p3544b800} fill="url(#paint0_linear_12_853)" id="Union" />
          <path d={svgPaths.p1868eaf0} fill="var(--fill-0, #141417)" id="Union (Stroke)" />
          <path d={svgPaths.p31184300} fill="var(--fill-0, #141417)" id="Line 1 (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_12_853" x1="12.5175" x2="12.5175" y1="15.025" y2="4.59378">
            <stop stopColor="#AD81F1" />
            <stop offset="0.134615" stopColor="#AD81F1" />
            <stop offset="0.932692" stopColor="#CBAAFF" />
            <stop offset="1" stopColor="#CBAAFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group4 />
      <div className="[grid-area:1_/_1] h-[16px] ml-[39px] mt-[9.89px] relative w-[122px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 16">
          <g id="Vector">
            <path d={svgPaths.p3628d800} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p602fc00} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p1de75400} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p26e26fc0} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p273fae80} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p19a5d000} fill="var(--fill-0, #0080FF)" />
            <path d={svgPaths.p28616300} fill="var(--fill-0, #0080FF)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-nowrap">
        <p className="leading-[20px]">Trade</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[6px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[48.2px]">
        <p className="leading-[20px]">Tokens</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-0 relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[36.88px]">
        <p className="leading-[20px]">Pools</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame2 />
      <Link />
      <Link1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Group6 />
      <Frame1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2362dd] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0px_20px_-5px_#2362dd] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[101.67px]">
        <p className="leading-[20px]">Connect</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Button />
    </div>
  );
}

export default function Nav() {
  return (
    <div className="relative size-full" data-name="Nav">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNav} />
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[9px] pt-[16px] px-[24px] relative size-full">
          <Frame />
          <Container />
        </div>
      </div>
    </div>
  );
}