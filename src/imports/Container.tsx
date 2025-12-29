import svgPaths from "./svg-mhzvpqd0x3";

function Container() {
  return <div className="h-[4px] shrink-0 w-[442px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[2px] pt-0 px-0 relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[37.25px]">
        <p className="leading-[20px]">Swap</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[43px]">
        <p className="leading-[20px]">Limit</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[32.17px]">
        <p className="leading-[20px]">Buy</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[32.17px]">
        <p className="leading-[20px]">Sell</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Group">
            <path d={svgPaths.p29743c00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p5dcda80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p18f16c00} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[28px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] pt-[5px] px-0 relative shrink-0 w-full" data-name="Margin">
      <Container />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[46.05px]">
        <p className="leading-[20px]">Sell</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(35,98,221,0.1)] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(35,98,221,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] text-center w-[23.7px]">
          <p className="leading-[15px]">25%</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Button5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[100px] shrink-0 w-[41.7px]">
      <Container5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(35,98,221,0.1)] content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(35,98,221,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] text-center w-[23.7px]">
        <p className="leading-[15px]">50%</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 w-[41.7px]" data-name="Container">
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(35,98,221,0.1)] content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(35,98,221,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] text-center w-[23.7px]">
        <p className="leading-[15px]">75%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 w-[41.7px]" data-name="Container">
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(35,98,221,0.1)] content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative rounded-[20px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(35,98,221,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] text-center w-[23.7px]">
        <p className="leading-[15px]">MAX</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0 w-full" data-name="Container">
      <Button8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[41.7px]">
      <Container8 />
    </div>
  );
}

function MaxComponent() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="max component">
      <Frame />
      <Container6 />
      <Container7 />
      <Frame1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[381px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container4 />
        <MaxComponent />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Aleo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-[62.14px]">
        <p className="leading-[40px]">1.5</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-19px] overflow-clip relative shrink-0 w-[285.81px]" data-name="Input">
      <Container10 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[26px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 28">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2dfc8140} fill="var(--fill-0, #627EEA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#1e293b] h-[30px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Background+Border">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#545c69] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[16px] text-center w-[32.19px]">
          <p className="leading-[24px]">ETH</p>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#2d2e38] mr-[-19px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[9px] pr-[13px] py-[6px] relative rounded-[inherit]">
        <BackgroundBorder />
        <Container11 />
        <Svg2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-0 pr-[19px] py-0 relative size-full">
        <Input />
        <Button9 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[64.81px]">
        <p className="leading-[16px]">$2,642.31</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[4px] pt-0 px-0 relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(26,27,35,0.6)] content-stretch flex flex-col gap-[16px] items-start left-[9px] p-[21px] right-[9px] rounded-[16px] top-[9px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#545c69] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container9 />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[67.16px]">
        <p className="leading-[20px]">Buy</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-[165.65px]">
        <p className="leading-[40px]">3,963.46</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Input">
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Aleo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[16px] text-center text-nowrap">
          <p className="leading-[24px]">Select</p>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#2d2e38] relative rounded-[9999px] shrink-0 w-[107px]" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[9px] pr-[13px] py-[6px] relative rounded-[inherit] w-full">
        <Container18 />
        <Svg3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[48px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[102px] items-center relative size-full">
        <Input1 />
        <Button10 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[0] relative shrink-0 text-[12px]" data-name="Paragraph">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center not-italic relative shrink-0 text-[#64748b] w-[72.02px]">
        <p className="leading-[16px]">{`$3,963.46 `}</p>
      </div>
      <div className="flex flex-col font-['Aleo:Regular',sans-serif] font-normal h-[16px] justify-center relative shrink-0 text-[rgba(248,113,113,0.8)] w-[57.61px]">
        <p className="leading-[16px]">(-0.05%)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[4px] pt-0 px-0 relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(26,27,35,0.6)] content-stretch flex flex-col gap-[16px] items-start left-[9px] pb-[21px] pt-[29px] px-[21px] right-[9px] rounded-[16px] top-[176px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#545c69] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container16 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <g id="Group">
            <path d={svgPaths.p335b6880} id="Vector" stroke="var(--stroke-0, #2362DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p205ef2c0} id="Vector_2" stroke="var(--stroke-0, #2362DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[132.67px]">
        <p className="leading-[16px]">1 ETH = 2,642.31 USDC</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Container">
      <Svg4 />
      <Container21 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p3980ad40} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[33.41px]">
        <p className="leading-[16px]">$4.20</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Container">
      <Svg5 />
      <Container23 />
      <Svg6 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] right-[25px] top-[346px]" data-name="Container">
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[115.72px]">
        <p className="leading-[28px]">Swap Tokens</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#2362dd] content-stretch flex items-center justify-center left-[9px] overflow-clip px-0 py-[16px] right-[9px] rounded-[12px] shadow-[0px_0px_20px_-5px_rgba(35,98,221,0.5)] top-[386px]" data-name="Button">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[115.72px]">
        <p className="leading-[28px]">Swap Tokens</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[9px] overflow-clip px-0 py-[16px] right-[9px] rounded-[12px] shadow-[0px_0px_20px_-5px_rgba(35,98,221,0.5)] top-[386px]" data-name="Button" style={{ backgroundImage: "linear-gradient(96.1061deg, rgb(35, 98, 221) 1.2697%, rgb(44, 127, 221) 47.585%, rgb(173, 129, 241) 99.776%)" }}>
      <Container27 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[rgba(20,20,25,0.6)] h-[462px] relative shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder />
        <OverlayBorder1 />
        <Container25 />
        <Button11 />
        <Button12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Margin1() {
  return <div className="h-[27px] shrink-0 w-full" data-name="Margin" />;
}

export default function Container28() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[#141419] content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" />
      <Margin />
      <OverlayBorderShadowOverlayBlur />
      <Margin1 />
    </div>
  );
}