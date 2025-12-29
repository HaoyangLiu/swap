import { X, RotateCcw, Settings, ChevronDown, ChevronRight } from 'lucide-react';

interface NewPositionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewPositionModal({ isOpen, onClose }: NewPositionModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-[rgba(148,163,184,0.3)]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-[#94a3b8] text-[14px]">
                <span>Your positions</span>
                <ChevronRight className="size-4" />
                <span className="text-white">New position</span>
              </div>
              <button onClick={onClose} className="text-[#94a3b8] hover:text-white transition-colors">
                <X className="size-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="font-['Aleo:SemiBold',sans-serif] text-[28px] text-white">New position</h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">
                  <RotateCcw className="size-4" />
                  Reset
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(148,163,184,0.1)] text-white border border-[rgba(148,163,184,0.3)] text-[14px]">
                  v4 position
                  <ChevronDown className="size-4" />
                </button>
                <button className="p-1.5 text-[#94a3b8] hover:text-white transition-colors">
                  <Settings className="size-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex gap-6">
            {/* Left Sidebar - Steps */}
            <div className="w-64 flex-shrink-0">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-white text-black flex items-center justify-center font-['Aleo:SemiBold',sans-serif] text-[14px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-[#94a3b8] text-[12px]">Step 1</p>
                    <p className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]">Select token pair and fees</p>
                  </div>
                </div>
                <div className="ml-4 h-8 w-px bg-[rgba(148,163,184,0.3)]" />
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-[rgba(148,163,184,0.2)] text-[#94a3b8] flex items-center justify-center font-['Aleo:SemiBold',sans-serif] text-[14px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-[#94a3b8] text-[12px]">Step 2</p>
                    <p className="text-[#94a3b8] font-['Aleo:Medium',sans-serif] text-[14px]">Set price range and deposit amounts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="flex-1">
              {/* Select Pair */}
              <div className="mb-6">
                <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-1">Select pair</h3>
                <p className="text-[#94a3b8] text-[14px] mb-4">
                  Choose the tokens you want to provide liquidity for. You can select tokens on all supported networks.
                </p>
                
                <div className="flex items-center gap-3 mb-4">
                  {/* ETH Button */}
                  <button className="flex-1 flex items-center justify-between px-4 py-3 bg-[rgba(148,163,184,0.05)] border border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)] transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-[#627eea] flex items-center justify-center">
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[12px]">Ξ</span>
                      </div>
                      <span className="text-white font-['Inter:Medium',sans-serif]">ETH</span>
                    </div>
                    <ChevronDown className="size-4 text-[#94a3b8]" />
                  </button>

                  {/* Choose Token Button */}
                  <button className="flex-1 flex items-center justify-between px-4 py-3 bg-black border border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)] transition-colors">
                    <span className="text-white font-['Inter:Medium',sans-serif]">Choose token</span>
                    <ChevronDown className="size-4 text-[#94a3b8]" />
                  </button>
                </div>

                {/* Add a Hook */}
                <button className="flex items-center gap-2 text-[#94a3b8] hover:text-white transition-colors text-[14px]">
                  <span className="size-4 border border-[rgba(148,163,184,0.5)] flex items-center justify-center text-[10px]">+</span>
                  <span>Add a Hook</span>
                  <span className="px-1.5 py-0.5 bg-[rgba(148,163,184,0.2)] text-[10px]">Advanced</span>
                  <span className="inline-block size-4 bg-[rgba(148,163,184,0.2)] rounded-full text-center text-[10px]">?</span>
                </button>
              </div>

              {/* Fee Tier */}
              <div>
                <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-1">Fee tier</h3>
                <p className="text-[#94a3b8] text-[14px] mb-4">
                  The amount earned providing liquidity. Choose an amount that suits your risk tolerance and strategy.
                </p>
                
                {/* Fee Tier Selector */}
                <button className="w-full flex items-center justify-between px-4 py-3 bg-[rgba(148,163,184,0.05)] border border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)] transition-colors mb-2">
                  <div>
                    <p className="text-white font-['Inter:Medium',sans-serif] text-left">-- fee tier</p>
                    <p className="text-[#94a3b8] text-[12px] text-left">The % you will earn in fees</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#94a3b8]">
                    <span className="text-[14px]">More</span>
                    <ChevronDown className="size-4" />
                  </div>
                </button>
              </div>

              {/* Continue Button */}
              <button className="w-full mt-6 px-4 py-3 bg-[rgba(148,163,184,0.1)] text-[#94a3b8] cursor-not-allowed text-[14px] font-['Inter:Medium',sans-serif]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}