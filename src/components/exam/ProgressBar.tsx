import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  isFlagged?: boolean;    // Is this question flagged
  onToggleFlag?: () => void; // State changed when clicking
}

export const ProgressBar = ({ current, total, isFlagged, onToggleFlag }: ProgressBarProps) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="w-full font-inter">
      {/* Header of Progress Bar */}
      <div className="flex justify-between items-center mb-2">
        {/* Question number info */}
        <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider">
          Question {current} of {total}
        </span>

        <button 
          onClick={onToggleFlag}
          className={`transition-all hover:scale-110 active:scale-95 ${
            isFlagged ? 'text-system-flag' : 'text-text-muted hover:text-system-flag'
          }`}
          title="Flag for review"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 512 512" 
            fill={isFlagged ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            strokeWidth="32" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* Flag icon */}
            <path d="M80 448V64l272 128-272 128" />
          </svg>
        </button>
      </div>

      <div className="w-full h-2 bg-exam-bg rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
