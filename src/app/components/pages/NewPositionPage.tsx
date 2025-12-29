import { useState } from 'react';
import { ArrowPathIcon, Cog6ToothIcon, ChevronDownIcon, ChevronRightIcon, PencilIcon } from '@heroicons/react/24/outline';

interface NewPositionPageProps {
  onBack: () => void;
}

export function NewPositionPage({ onBack }: NewPositionPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [priceRangeMode, setPriceRangeMode] = useState<'full' | 'custom'>('full');
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [ethAmount, setEthAmount] = useState('');
  const [usdcAmount, setUsdcAmount] = useState('');
  
  // Step 1 form state
  const [token1, setToken1] = useState('ETH');
  const [token2, setToken2] = useState('');
  const [feeTier, setFeeTier] = useState('');
  const [showToken2Dropdown, setShowToken2Dropdown] = useState(false);
  const [showFeeTierDropdown, setShowFeeTierDropdown] = useState(false);

  const canContinueStep1 = token1 && token2 && feeTier;

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[#94a3b8] text-[14px] mb-6">
        <button onClick={onBack} className="hover:text-white transition-colors">
          Your positions
        </button>
        <ChevronRightIcon className="size-4" />
        <span className="text-white">New position</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-['Aleo:SemiBold',sans-serif] text-[32px] text-white">New position</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">
            <ArrowPathIcon className="size-4" />
            Reset
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(148,163,184,0.1)] text-white border border-[rgba(148,163,184,0.3)] text-[14px]">
            v4 position
            <ChevronDownIcon className="size-4" />
          </button>
          <button className="p-1.5 text-[#94a3b8] hover:text-white transition-colors">
            <Cog6ToothIcon className="size-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-6">
        {/* Left Sidebar - Steps */}
        <div className="w-64 flex-shrink-0">
          <div className="space-y-2">
            <button 
              onClick={() => setCurrentStep(1)}
              className="flex items-start gap-3 w-full text-left"
            >
              <div className={`size-8 rounded-full flex items-center justify-center font-['Aleo:SemiBold',sans-serif] text-[14px] flex-shrink-0 ${
                currentStep === 1 ? 'bg-white text-black' : 'bg-[rgba(148,163,184,0.2)] text-[#94a3b8]'
              }`}>
                1
              </div>
              <div>
                <p className="text-[#94a3b8] text-[12px]">Step 1</p>
                <p className={`font-['Aleo:SemiBold',sans-serif] text-[14px] ${
                  currentStep === 1 ? 'text-white' : 'text-[#94a3b8]'
                }`}>Select token pair and fees</p>
              </div>
            </button>
            <div className="ml-4 h-8 w-px bg-[rgba(148,163,184,0.3)]" />
            <button 
              onClick={() => setCurrentStep(2)}
              className="flex items-start gap-3 w-full text-left"
            >
              <div className={`size-8 rounded-full flex items-center justify-center font-['Aleo:SemiBold',sans-serif] text-[14px] flex-shrink-0 ${
                currentStep === 2 ? 'bg-white text-black' : 'bg-[rgba(148,163,184,0.2)] text-[#94a3b8]'
              }`}>
                2
              </div>
              <div>
                <p className="text-[#94a3b8] text-[12px]">Step 2</p>
                <p className={`font-['Aleo:Medium',sans-serif] text-[14px] ${
                  currentStep === 2 ? 'text-white' : 'text-[#94a3b8]'
                }`}>Set price range and deposit amounts</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="flex-1 max-w-4xl">
          {currentStep === 1 ? (
            /* Step 1 Content */
            <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
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
                    <ChevronDownIcon className="size-4 text-[#94a3b8]" />
                  </button>

                  {/* Choose Token Button */}
                  <div className="relative flex-1">
                    <button 
                      onClick={() => setShowToken2Dropdown(!showToken2Dropdown)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-black border border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)] transition-colors"
                    >
                      {token2 ? (
                        <div className="flex items-center gap-2">
                          <div className="size-6 rounded-full bg-[#2775ca] flex items-center justify-center">
                            <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[12px]">$</span>
                          </div>
                          <span className="text-white font-['Inter:Medium',sans-serif]">{token2}</span>
                        </div>
                      ) : (
                        <span className="text-white font-['Inter:Medium',sans-serif]">Choose token</span>
                      )}
                      <ChevronDownIcon className="size-4 text-[#94a3b8]" />
                    </button>
                    
                    {showToken2Dropdown && (
                      <div className="absolute top-full mt-2 w-full bg-[#1a1d24] border border-[rgba(148,163,184,0.5)] z-10">
                        {['USDC', 'USDT', 'DAI', 'WBTC'].map((token) => (
                          <button
                            key={token}
                            onClick={() => {
                              setToken2(token);
                              setShowToken2Dropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-[rgba(148,163,184,0.1)] transition-colors"
                          >
                            {token}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                <div className="relative">
                  <button 
                    onClick={() => setShowFeeTierDropdown(!showFeeTierDropdown)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[rgba(148,163,184,0.05)] border border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)] transition-colors mb-2"
                  >
                    <div>
                      <p className="text-white font-['Inter:Medium',sans-serif] text-left">
                        {feeTier ? `${feeTier} fee tier` : '-- fee tier'}
                      </p>
                      <p className="text-[#94a3b8] text-[12px] text-left">The % you will earn in fees</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#94a3b8]">
                      <span className="text-[14px]">More</span>
                      <ChevronDownIcon className="size-4" />
                    </div>
                  </button>
                  
                  {showFeeTierDropdown && (
                    <div className="absolute top-full w-full bg-[#1a1d24] border border-[rgba(148,163,184,0.5)] z-10">
                      {['0.01%', '0.05%', '0.3%', '1%'].map((tier) => (
                        <button
                          key={tier}
                          onClick={() => {
                            setFeeTier(tier);
                            setShowFeeTierDropdown(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-[rgba(148,163,184,0.1)] transition-colors"
                        >
                          <p className="text-white font-['Inter:Medium',sans-serif]">{tier}</p>
                          <p className="text-[#94a3b8] text-[12px]">
                            {tier === '0.01%' && 'Best for very stable pairs'}
                            {tier === '0.05%' && 'Best for stable pairs'}
                            {tier === '0.3%' && 'Best for most pairs'}
                            {tier === '1%' && 'Best for exotic pairs'}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Continue Button */}
              <button 
                onClick={() => canContinueStep1 && setCurrentStep(2)}
                disabled={!canContinueStep1}
                className={`w-full mt-6 px-4 py-3 text-[14px] font-['Inter:Medium',sans-serif] transition-colors ${
                  canContinueStep1 
                    ? 'bg-[#2362dd] text-white hover:bg-[#1d52bd] cursor-pointer' 
                    : 'bg-[rgba(148,163,184,0.1)] text-[#94a3b8] cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          ) : (
            /* Step 2 Content */
            <div className="space-y-6">
              {/* Token Pair Header */}
              <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <div className="size-8 rounded-full bg-[#627eea] flex items-center justify-center">
                      <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]\">Ξ</span>
                    </div>
                    <div className="size-8 rounded-full bg-[#2775ca] flex items-center justify-center -ml-2">
                      <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]\">$</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-['Inter:SemiBold',sans-serif] text-[16px]\">ETH / USDC</p>
                    <div className="flex items-center gap-2 text-[12px] text-[#94a3b8]">
                      <span className="px-1.5 py-0.5 bg-[rgba(148,163,184,0.2)] rounded\">v4</span>
                      <span>0.3%</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">
                  <PencilIcon className="size-4" />
                  Edit
                </button>
              </div>

              {/* Set Price Range */}
              <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
                <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-4">Set price range</h3>
                
                {/* Full Range / Custom Range Toggle */}
                <div className="flex gap-2 mb-4">
                  <button 
                    onClick={() => setPriceRangeMode('full')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      priceRangeMode === 'full' 
                        ? 'bg-[rgba(148,163,184,0.2)] text-white' 
                        : 'bg-[rgba(148,163,184,0.05)] text-[#94a3b8] hover:bg-[rgba(148,163,184,0.1)]'
                    }`}
                  >
                    Full range
                  </button>
                  <button 
                    onClick={() => setPriceRangeMode('custom')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                      priceRangeMode === 'custom' 
                        ? 'bg-[rgba(148,163,184,0.2)] text-white' 
                        : 'bg-[rgba(148,163,184,0.05)] text-[#94a3b8] hover:bg-[rgba(148,163,184,0.1)]'
                    }`}
                  >
                    Custom range
                  </button>
                </div>

                <p className="text-[#94a3b8] text-[13px] mb-6">
                  Providing full range liquidity ensures continuous market participation across all possible prices, offering 
                  simplicity but with potential for higher impermanent loss.
                </p>

                {/* Current Price */}
                <div className="mb-4">
                  <p className="text-[#94a3b8] text-[12px] mb-1">Current price</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-['Aleo:SemiBold',sans-serif] text-[20px]">
                      2,961.66 ETH/USDC <span className="text-[#94a3b8] text-[16px]">($2,961.66)</span>
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-[#627eea] flex items-center justify-center">
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[10px]\">Ξ</span>
                      </div>
                      <span className="text-white text-[14px]\">ETH</span>
                      <div className="size-6 rounded-full bg-[#2775ca] flex items-center justify-center ml-2">
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[10px]\">$</span>
                      </div>
                      <span className="text-white text-[14px]\">USDC</span>
                    </div>
                  </div>
                </div>

                {/* Price Chart */}
                <div className="bg-[#1a1d24] border border-[rgba(148,163,184,0.3)] p-4 mb-6">
                  <div className="h-48 relative">
                    {/* Chart - SVG representation */}
                    <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e879f9" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,120 L30,110 L60,80 L90,40 L120,50 L150,30 L180,45 L210,35 L240,55 L270,90 L300,130 L330,100 L360,80 L390,95 L420,70 L450,85 L480,75 L510,90 L540,100 L570,95 L600,90" 
                        fill="url(#chartGradient)" 
                        stroke="#e879f9" 
                        strokeWidth="2"
                      />
                      {/* Current price line */}
                      <line x1="0" y1="100" x2="600" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
                    </svg>
                  </div>
                  
                  {/* Chart Time Range */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 text-[12px] bg-[rgba(148,163,184,0.1)] text-white rounded">1D</button>
                      <button className="px-2 py-1 text-[12px] text-[#94a3b8] hover:text-white">1W</button>
                      <button className="px-2 py-1 text-[12px] text-[#94a3b8] hover:text-white">1M</button>
                      <button className="px-2 py-1 text-[12px] text-[#94a3b8] hover:text-white">1Y</button>
                      <button className="px-2 py-1 text-[12px] text-[#94a3b8] hover:text-white">All time</button>
                    </div>
                    <button className="text-[#94a3b8] hover:text-white text-[12px]">Reset</button>
                  </div>
                </div>

                {/* Price Strategies */}
                <div className="mb-6">
                  <p className="text-[#94a3b8] text-[14px] mb-3">Price strategies</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedStrategy('stable')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        selectedStrategy === 'stable'
                          ? 'border-[#2362dd] bg-[rgba(35,98,221,0.1)]'
                          : 'border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)]'
                      }`}
                    >
                      <p className="text-white font-['Inter:SemiBold',sans-serif] mb-1">Stable</p>
                      <p className="text-white text-[14px] mb-2">± 3 ticks</p>
                      <p className="text-[#94a3b8] text-[11px]">Good for stablecoins or low volatility pairs</p>
                    </button>

                    <button
                      onClick={() => setSelectedStrategy('wide')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        selectedStrategy === 'wide'
                          ? 'border-[#2362dd] bg-[rgba(35,98,221,0.1)]'
                          : 'border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)]'
                      }`}
                    >
                      <p className="text-white font-['Inter:SemiBold',sans-serif] mb-1">Wide</p>
                      <p className="text-white text-[14px] mb-2">-50% — +100%</p>
                      <p className="text-[#94a3b8] text-[11px]">Good for volatile pairs</p>
                    </button>

                    <button
                      onClick={() => setSelectedStrategy('one-sided-lower')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        selectedStrategy === 'one-sided-lower'
                          ? 'border-[#2362dd] bg-[rgba(35,98,221,0.1)]'
                          : 'border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)]'
                      }`}
                    >
                      <p className="text-white font-['Inter:SemiBold',sans-serif] mb-1">One-sided lower</p>
                      <p className="text-white text-[14px] mb-2">-50%</p>
                      <p className="text-[#94a3b8] text-[11px]">Supply liquidity if price goes down</p>
                    </button>

                    <button
                      onClick={() => setSelectedStrategy('one-sided-upper')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        selectedStrategy === 'one-sided-upper'
                          ? 'border-[#2362dd] bg-[rgba(35,98,221,0.1)]'
                          : 'border-[rgba(148,163,184,0.3)] hover:border-[rgba(148,163,184,0.5)]'
                      }`}
                    >
                      <p className="text-white font-['Inter:SemiBold',sans-serif] mb-1">One-sided upper</p>
                      <p className="text-white text-[14px] mb-2">+100%</p>
                      <p className="text-[#94a3b8] text-[11px]">Supply liquidity if price goes up</p>
                    </button>
                  </div>
                </div>

                {/* Min and Max Price */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-[#94a3b8] text-[12px] mb-2">Min price</label>
                    <div className="bg-[#1a1d24] border border-[rgba(148,163,184,0.3)] p-3">
                      <p className="text-white font-['Aleo:SemiBold',sans-serif] text-[24px] mb-1">0</p>
                      <p className="text-[#94a3b8] text-[12px]">USDC = 1 ETH</p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#94a3b8] text-[12px] mb-2">Max price</label>
                    <div className="bg-[#1a1d24] border border-[rgba(148,163,184,0.3)] p-3">
                      <p className="text-white font-['Aleo:SemiBold',sans-serif] text-[24px] mb-1">∞</p>
                      <p className="text-[#94a3b8] text-[12px]">USDC = 1 ETH</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit Tokens */}
              <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
                <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-1">Deposit tokens</h3>
                <p className="text-[#94a3b8] text-[14px] mb-4">
                  Specify the token amounts for your liquidity contribution.
                </p>

                {/* ETH Input */}
                <div className="bg-[#1a1d24] border border-[rgba(148,163,184,0.3)] p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <input
                      type="text"
                      value={ethAmount}
                      onChange={(e) => setEthAmount(e.target.value)}
                      placeholder="0"
                      className="bg-transparent text-white font-['Aleo:SemiBold',sans-serif] text-[32px] w-full outline-none"
                    />
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-[#627eea] flex items-center justify-center">
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]\">Ξ</span>
                      </div>
                      <span className="text-white font-['Inter:SemiBold',sans-serif]">ETH</span>
                    </div>
                  </div>
                  <p className="text-[#94a3b8] text-[12px] text-right">0.00253 ETH</p>
                </div>

                {/* USDC Input */}
                <div className="bg-[#1a1d24] border border-[rgba(148,163,184,0.3)] p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <input
                      type="text"
                      value={usdcAmount}
                      onChange={(e) => setUsdcAmount(e.target.value)}
                      placeholder="0"
                      className="bg-transparent text-white font-['Aleo:SemiBold',sans-serif] text-[32px] w-full outline-none"
                    />
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-[#2775ca] flex items-center justify-center">
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]\">$</span>
                      </div>
                      <span className="text-white font-['Inter:SemiBold',sans-serif]">USDC</span>
                    </div>
                  </div>
                  <p className="text-[#94a3b8] text-[12px] text-right">48.4665 USDC</p>
                </div>

                {/* Enter an Amount Button */}
                <button className="w-full px-4 py-3 bg-[rgba(148,163,184,0.1)] text-[#94a3b8] cursor-not-allowed text-[14px] font-['Inter:Medium',sans-serif]">
                  Enter an amount
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}