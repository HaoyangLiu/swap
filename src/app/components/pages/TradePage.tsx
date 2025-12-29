import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DashboardPanel } from '../DashboardPanel';
import { SwapPanel } from '../panels/SwapPanel';
import { PriceChartPanel } from '../panels/PriceChartPanel';
import { PortfolioPanel } from '../panels/PortfolioPanel';
import { RecentTransactionsPanel } from '../panels/RecentTransactionsPanel';
import { MarketStatsPanel } from '../panels/MarketStatsPanel';

interface PanelConfig {
  id: string;
  title: string;
  component: () => React.ReactNode;
}

export function TradePage() {
  const [panels, setPanels] = useState<PanelConfig[]>([
    { id: 'swap', title: 'Swap', component: () => <SwapPanel /> },
    { id: 'chart', title: 'Price Chart', component: () => <PriceChartPanel /> },
    { id: 'portfolio', title: 'Portfolio', component: () => <PortfolioPanel /> },
    { id: 'transactions', title: 'Recent Transactions', component: () => <RecentTransactionsPanel /> },
    { id: 'stats', title: 'Market Stats', component: () => <MarketStatsPanel /> },
  ]);

  const movePanel = useCallback((dragId: string, hoverId: string) => {
    setPanels((prevPanels) => {
      const dragIndex = prevPanels.findIndex((p) => p.id === dragId);
      const hoverIndex = prevPanels.findIndex((p) => p.id === hoverId);

      if (dragIndex === -1 || hoverIndex === -1) return prevPanels;

      const newPanels = [...prevPanels];
      const [draggedPanel] = newPanels.splice(dragIndex, 1);
      newPanels.splice(hoverIndex, 0, draggedPanel);

      return newPanels;
    });
  }, []);

  const removePanel = useCallback((id: string) => {
    setPanels((prevPanels) => prevPanels.filter((p) => p.id !== id));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="font-['Aleo:SemiBold',sans-serif] text-[28px] text-white mb-2">Dashboard</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[#94a3b8]">Drag and drop panels to customize your layout</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {panels.map((panel, index) => (
            <DashboardPanel
              key={panel.id}
              id={panel.id}
              title={panel.title}
              onMove={movePanel}
              onClose={panels.length > 1 ? () => removePanel(panel.id) : undefined}
              index={index}
            >
              {panel.component()}
            </DashboardPanel>
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
