import svgPaths from "./svg-z6shiyri67";
import imgNav from "figma:asset/adde19d594fc1e97b9f201dd941fb3dadffcae22.png";

function CleanBackground() {
  return (
    <div className="absolute bg-white h-[720px] left-0 overflow-clip top-0 w-[1280px]" data-name="clean background">
      <div className="absolute bg-[#111215] h-[1010px] left-0 top-[-28px] w-[1512px]" />
    </div>
  );
}

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

function Container5() {
  return <div className="h-[16px] shrink-0 w-[64.81px]" data-name="Container" />;
}

function Button5() {
  return (
    <div className="bg-[rgba(35,98,221,0.1)] content-stretch flex flex-col items-center justify-center px-[9px] py-[3px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(35,98,221,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] text-center w-[23.7px]">
        <p className="leading-[15px]">MAX</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container5 />
      <Button5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-[62.14px]">
        <p className="leading-[40px]">1.5</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Input">
      <Container8 />
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

function Container9() {
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

function Button6() {
  return (
    <div className="bg-[#2d2e38] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[9px] pr-[13px] py-[6px] relative rounded-[inherit]">
        <BackgroundBorder />
        <Container9 />
        <Svg2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Input />
        <Button6 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[64.81px]">
        <p className="leading-[16px]">$2,642.31</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[4px] pt-0 px-0 relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(26,27,35,0.6)] content-stretch flex flex-col gap-[16px] items-start left-[9px] p-[21px] right-[9px] rounded-[16px] top-[9px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#545c69] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container7 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[67.16px]">
        <p className="leading-[20px]">Buy</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.9px] w-[165.65px]">
        <p className="leading-[40px]">3,963.46</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Input">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Aleo:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#e2e8f0] text-[16px] text-center w-[64px]">
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

function Button7() {
  return (
    <div className="bg-[#2362dd] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[9px] pr-[13px] py-[6px] relative rounded-[inherit]">
        <Container16 />
        <Svg3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Input1 />
        <Button7 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Liberation_Mono:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[12px]" data-name="Paragraph">
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[#64748b] w-[72.02px]">
        <p className="leading-[16px]">{`$3,963.46 `}</p>
      </div>
      <div className="flex flex-col h-[16px] justify-center relative shrink-0 text-[rgba(248,113,113,0.8)] w-[57.61px]">
        <p className="leading-[16px]">(-0.05%)</p>
      </div>
    </div>
  );
}

function Container18() {
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
      <Container14 />
      <Container17 />
      <Container18 />
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

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] w-[132.67px]">
        <p className="leading-[16px]">1 ETH = 2,642.31 USDC</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Container">
      <Svg4 />
      <Container19 />
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

function Container21() {
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

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Container">
      <Svg5 />
      <Container21 />
      <Svg6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] right-[25px] top-[346px]" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Aleo:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[115.72px]">
        <p className="leading-[28px]">Swap Tokens</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#2362dd] content-stretch flex items-center justify-center left-[9px] overflow-clip px-0 py-[16px] right-[9px] rounded-[12px] shadow-[0px_0px_20px_-5px_rgba(35,98,221,0.5)] top-[386px]" data-name="Button">
      <Container24 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur backdrop-filter bg-[rgba(20,20,25,0.6)] h-[462px] relative shrink-0 w-full" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <OverlayBorder />
        <OverlayBorder1 />
        <Container23 />
        <Button8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Margin1() {
  return <div className="h-[27px] shrink-0 w-full" data-name="Margin" />;
}

function Container25() {
  return (
    <div className="absolute backdrop-blur backdrop-filter bg-[#141419] content-stretch flex flex-col h-[506px] items-start left-0 max-w-[460px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)]" />
      <Margin />
      <OverlayBorderShadowOverlayBlur />
      <Margin1 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pd4eb140} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#1e1f29] left-1/2 rounded-[12px] top-[calc(50%-85px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[9px] relative rounded-[inherit]">
        <Svg7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#94a3b8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[596px] left-[419px] overflow-clip top-[124px] w-[442px]">
      <Container25 />
      <Button9 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[6px] relative">
        <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[48.2px]">
          <p className="leading-[20px]">Tokens</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[6px] relative">
        <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[36.88px]">
          <p className="leading-[20px]">Pools</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[6px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="flex flex-col font-['Aleo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px]">Trade</p>
      </div>
      <Link />
      <Link1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[574.68px]">
      <div className="h-[40px] relative shrink-0 w-[183px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 40">
          <g id="Vector">
            <path d={svgPaths.p2bf0b480} fill="#2362DD" />
            <path clipRule="evenodd" d={svgPaths.p13cdb380} fill="#AD81F1" fillRule="evenodd" />
            <path d={svgPaths.p25582700} fill="#AD81F1" />
            <path d={svgPaths.p2271c200} fill="#0080FF" />
            <path d={svgPaths.p277c1100} fill="#111215" />
            <path d={svgPaths.p7a3ce00} fill="url(#paint0_linear_1_125)" />
            <path d={svgPaths.p318c2880} fill="#111215" />
            <path d={svgPaths.p33b68e80} fill="#111215" />
            <path d={svgPaths.p379cc00} fill="#0080FF" />
            <path d={svgPaths.p44d2900} fill="#0080FF" />
            <path d={svgPaths.p2047ba00} fill="#0080FF" />
            <path d={svgPaths.p33a480f0} fill="#0080FF" />
            <path d={svgPaths.p3db47a80} fill="#0080FF" />
            <path d={svgPaths.p319f9600} fill="#0080FF" />
            <path d={svgPaths.p3b36d00} fill="#0080FF" />
            <path d={svgPaths.p25cd0980} fill="var(--fill-0, #0072E5)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_125" x1="91.3438" x2="91.3438" y1="21.3539" y2="5.69233">
              <stop stopColor="#AD81F1" />
              <stop offset="0.134615" stopColor="#AD81F1" />
              <stop offset="0.932692" stopColor="white" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <OverlayBorderShadowOverlayBlur1 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#2362dd] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_0px_20px_-5px_#2362dd] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[101.67px]">
        <p className="leading-[20px]">Connect</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Button10 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[9px] pt-[16px] px-[24px] right-0 top-0" data-name="Nav">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNav} />
      <div aria-hidden="true" className="absolute border border-[rgba(148,163,184,0.5)] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Container26 />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <CleanBackground />
      <Frame1 />
      <Nav />
    </div>
  );
}