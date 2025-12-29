import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { time: '00:00', price: 2640 },
  { time: '04:00', price: 2650 },
  { time: '08:00', price: 2645 },
  { time: '12:00', price: 2642 },
  { time: '16:00', price: 2655 },
  { time: '20:00', price: 2648 },
];

export function PriceChartPanel() {
  return (
    <div className="h-full">
      <div className="mb-4">
        <h4 className="font-['Aleo:SemiBold',sans-serif] text-white mb-1">ETH/USD</h4>
        <div className="flex items-baseline gap-2">
          <span className="font-['Liberation_Mono:Regular',sans-serif] text-white text-[24px]">$2,642.31</span>
          <span className="font-['Liberation_Mono:Regular',sans-serif] text-[rgba(248,113,113,0.8)] text-[14px]">-0.05%</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d2e38" />
          <XAxis 
            dataKey="time" 
            stroke="#94a3b8" 
            style={{ fontSize: '12px', fontFamily: 'Liberation_Mono:Regular, monospace' }}
          />
          <YAxis 
            stroke="#94a3b8" 
            style={{ fontSize: '12px', fontFamily: 'Liberation_Mono:Regular, monospace' }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e1f29', 
              border: '1px solid #545c69',
              borderRadius: '8px',
              fontFamily: 'Liberation_Mono:Regular, monospace'
            }}
            labelStyle={{ color: '#94a3b8' }}
            itemStyle={{ color: '#60a5fa' }}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#2362dd" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
