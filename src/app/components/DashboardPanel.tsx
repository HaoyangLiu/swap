import { useDrag, useDrop } from 'react-dnd';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

interface DashboardPanelProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  onMove: (dragId: string, hoverId: string) => void;
  index: number;
}

export function DashboardPanel({ id, title, children, onClose, onMove, index }: DashboardPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'panel',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'panel',
    hover: (item: { id: string; index: number }) => {
      if (!ref.current) return;
      
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      onMove(item.id, id);
      item.index = hoverIndex;
    },
  });

  preview(drop(ref));

  return (
    <div
      ref={ref}
      className={`bg-[#141419] border border-[rgba(148,163,184,0.5)] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] transition-opacity ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(148,163,184,0.3)] bg-[rgba(20,20,25,0.6)]">
        <div className="flex items-center gap-2">
          <div ref={drag} className="cursor-move">
            <Bars2Icon className="size-5 text-[#94a3b8]" />
          </div>
          <h3 className="font-['Aleo:SemiBold',sans-serif] text-white">{title}</h3>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <XMarkIcon className="size-5" />
          </button>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}