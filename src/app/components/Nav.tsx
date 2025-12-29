import svgPaths from "../../imports/svg-t3q7qhfhj2";

import logo from '@/assets/logo.png'

const imgNav = '/images/nav-logo.svg';

const Logo = () => (
    <div className="flex items-center gap-2">
      <span className="text-2xl">🔄</span>
      <span className="font-bold">Swap</span>
    </div>
)


type PageType = 'trade' | 'explore' | 'pool' | 'portfolio' | 'new-position' | 'mvp-swap';

interface NavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

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

export default function Nav({ currentPage, onNavigate }: NavProps) {
  return (
    <div className="relative size-full" data-name="Nav">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNav} />
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full overflow-x-auto">
        <div className="content-stretch flex items-center justify-between pb-[9px] pt-[16px] px-[12px] md:px-[24px] relative w-full min-w-fit">
          {/* Left Side */}
          <div className="content-stretch flex gap-[16px] md:gap-[32px] items-center relative shrink-0">
            <div className="hidden sm:block">
              <Group6 />
            </div>

            {/* Navigation Links */}
            <div className="content-stretch flex items-center relative shrink-0 gap-0 sm:gap-0">
              <button
                onClick={() => onNavigate('trade')}
                className="content-stretch flex items-center justify-center px-[8px] md:px-[16px] py-0 relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className={`flex flex-col font-['Aleo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] text-nowrap ${
                  currentPage === 'trade' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[20px]">Trade</p>
                </div>
              </button>

              <button
                onClick={() => onNavigate('explore')}
                className="content-stretch flex flex-col items-start px-[8px] md:px-[16px] py-[6px] relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className={`flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] ${
                  currentPage === 'explore' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[20px]">Tokens</p>
                </div>
              </button>

              <button
                onClick={() => onNavigate('pool')}
                className="content-stretch flex flex-col items-center justify-center px-[8px] md:px-[16px] py-0 relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className={`flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] ${
                  currentPage === 'pool' || currentPage === 'new-position' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[20px]">Pools</p>
                </div>
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="content-stretch flex flex-col items-center justify-center px-[8px] md:px-[16px] py-0 relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className={`flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] ${
                  currentPage === 'portfolio' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[20px]">Portfolio</p>
                </div>
              </button>

              <button
                onClick={() => onNavigate('mvp-swap')}
                className="content-stretch flex flex-col items-center justify-center px-[8px] md:px-[16px] py-0 relative shrink-0 hover:opacity-80 transition-opacity"
              >
                <div className={`flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] ${
                  currentPage === 'mvp-swap' ? 'text-white' : 'text-[#94a3b8]'
                }`}>
                  <p className="leading-[20px]">MVP Swap</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Connect Button */}
          <div className="content-stretch flex items-center relative shrink-0">
            <button className="bg-[#2362dd] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0px_20px_-5px_#2362dd] shrink-0 hover:bg-[#1e56c7] transition-colors">
              <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[101.67px]">
                <p className="leading-[20px]">Connect</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
