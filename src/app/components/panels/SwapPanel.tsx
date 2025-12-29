import svgPaths from "../../../imports/svg-z6shiyri67";
import imgNav from "figma:asset/adde19d594fc1e97b9f201dd941fb3dadffcae22.png";

export function SwapPanel() {
  return (
    <div className="max-w-[442px] mx-auto">
      {/* Tabs */}
      <div className="flex gap-4 px-3 pb-2 mb-4">
        <button className="font-['Aleo:Medium',sans-serif] font-medium text-white text-[14px]">
          Swap
        </button>
        <button className="font-['Aleo:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
          Limit
        </button>
        <button className="font-['Aleo:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
          Buy
        </button>
        <button className="font-['Aleo:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
          Sell
        </button>
      </div>

      {/* Sell Section */}
      <div className="bg-[rgba(26,27,35,0.6)] border border-[#545c69] rounded-2xl p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="font-['Aleo:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">Sell</p>
          <button className="bg-[rgba(35,98,221,0.1)] border border-[rgba(35,98,221,0.2)] px-2 py-1 rounded-md">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#60a5fa] text-[10px]">MAX</span>
          </button>
        </div>

        <div className="flex items-center justify-between mb-2">
          <input 
            type="text" 
            defaultValue="1.5"
            className="bg-transparent font-['Liberation_Mono:Regular',sans-serif] text-white text-[36px] tracking-[-0.9px] outline-none w-full"
          />
          
          <div className="bg-[#2d2e38] border border-[rgba(255,255,255,0.1)] rounded-full flex items-center gap-2 px-3 py-1.5 shadow-lg">
            <div className="bg-[#1e293b] border border-[#545c69] rounded-full p-px">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg className="w-6 h-7" fill="none" viewBox="0 0 26 28">
                  <path clipRule="evenodd" d={svgPaths.p2dfc8140} fill="#627EEA" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#e2e8f0]">ETH</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        
        <p className="font-['Liberation_Mono:Regular',sans-serif] text-[#64748b] text-[12px]">$2,642.31</p>
      </div>

      {/* Swap Arrow */}
      <div className="flex justify-center -my-2 relative z-10">
        <div className="bg-[#1e1f29] border border-[#94a3b8] rounded-xl p-2 shadow-xl">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.pd4eb140} stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>

      {/* Buy Section */}
      <div className="bg-[rgba(26,27,35,0.6)] border border-[#545c69] rounded-2xl p-5 mb-4">
        <p className="font-['Aleo:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px] mb-4">Buy</p>

        <div className="flex items-center justify-between mb-2">
          <input 
            type="text" 
            defaultValue="3,963.46"
            className="bg-transparent font-['Liberation_Mono:Regular',sans-serif] text-white text-[36px] tracking-[-0.9px] outline-none w-full"
          />
          
          <div className="bg-[#2362dd] border border-[rgba(255,255,255,0.1)] rounded-full flex items-center gap-2 px-3 py-1.5 shadow-lg">
            <span className="font-['Aleo:SemiBold',sans-serif] font-semibold text-[#e2e8f0]">Select</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        
        <div className="flex gap-1">
          <span className="font-['Liberation_Mono:Regular',sans-serif] text-[#64748b] text-[12px]">$3,963.46</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] text-[rgba(248,113,113,0.8)] text-[12px]">(-0.05%)</span>
        </div>
      </div>

      {/* Exchange Rate and Fee */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p335b6880} stroke="#2362DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p205ef2c0} stroke="#2362DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
          <span className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[12px]">1 ETH = 2,642.31 USDC</span>
        </div>
        
        <div className="flex items-center gap-1 px-2 py-1 rounded">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d={svgPaths.p3980ad40} stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-['Inter:Regular',sans-serif] text-[#64748b] text-[12px]">$4.20</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Swap Button */}
      <button className="w-full bg-[#2362dd] text-white font-['Aleo:SemiBold',sans-serif] font-semibold py-4 rounded-xl shadow-[0px_0px_20px_-5px_rgba(35,98,221,0.5)] hover:bg-[#1e56c7] transition-colors">
        Swap Tokens
      </button>
    </div>
  );
}