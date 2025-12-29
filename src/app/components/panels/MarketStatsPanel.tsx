export function MarketStatsPanel() {
  const stats = [
    { label: '24h Volume', value: '$42.5B', change: '+12.3%', positive: true },
    { label: 'Active Pairs', value: '1,234', change: '+5', positive: true },
    { label: 'Total Liquidity', value: '$8.9B', change: '-2.1%', positive: false },
    { label: 'Avg. Gas Price', value: '25 Gwei', change: '-15%', positive: true },
  ];

  return (
    <div className="h-full">
      <h4 className="font-['Aleo:SemiBold',sans-serif] text-white mb-4">Market Statistics</h4>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-[rgba(26,27,35,0.6)] border border-[#545c69] rounded-xl p-4">
            <div className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[12px] mb-2">{stat.label}</div>
            <div className="font-['Liberation_Mono:Regular',sans-serif] text-white text-[20px] mb-1">{stat.value}</div>
            <div className={`font-['Liberation_Mono:Regular',sans-serif] text-[12px] ${stat.positive ? 'text-[rgba(52,211,153,0.8)]' : 'text-[rgba(248,113,113,0.8)]'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
