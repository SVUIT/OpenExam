import { X, Clock } from 'lucide-react';

interface QuestionHeaderProps {
  title: string;
  subTitle: string;
  variant: 'slanted' | 'plain';
  time?: string;
  onExit?: () => void;
}

export const QuestionHeader = ({ title, subTitle, variant, time, onExit }: QuestionHeaderProps) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#EEE5E5]">
      
      {/* The slant gray one */}
      {variant === 'slanted' && (
        <div 
          className="absolute inset-0 bg-[#3D3C3B]"
          style={{ clipPath: 'polygon(0 0, 60% 0, 45% 100%, 0 100%)' }}
        />
      )}

      <div className="relative z-10 flex justify-between items-center py-12 px-10">
        <div className="flex flex-col gap-1.5">
          <h1 className={`text-3xl font-semibold uppercase tracking-tight
            ${variant === 'slanted' ? 'text-white' : 'text-black'}`}>
            {title}
          </h1>
          
          <p className={`text-sm font-normal tracking-wide
            ${variant === 'slanted' ? 'text-white/50' : 'text-black/40'}`}>
            {subTitle}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {time && (
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock size={18} className="text-red-500" />
              <span className="text-red-500 font-bold tabular-nums">{time}</span>
            </div>
          )}
          
          <button 
            onClick={onExit}
            className="p-2 hover:bg-black/10 rounded-full transition-colors"
          >
            <X size={32} className="text-black" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
