import React from 'react';
import { CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

interface ResultBannerProps {
  score: number;
  passingScore?: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
}

export const ResultBanner = ({ 
  score, 
  passingScore = 70, 
  correctCount, 
  incorrectCount, 
  skippedCount 
}: ResultBannerProps) => {
  const isPassed = score >= passingScore;
  
  const theme = {
    color: isPassed ? 'text-[#22C55E]' : 'text-[#EF4444]',
    bannerBg: isPassed ? 'bg-[#F0FDF4]' : 'bg-[#FEF2F2]',
    bannerBorder: isPassed ? 'border-[#DCFCE7]' : 'border-[#FEE2E2]',
    scoreBg: isPassed ? 'bg-[#22C55E]' : 'bg-[#EF4444]',
    scoreHalo: isPassed ? 'bg-[#DCFCE7]' : 'bg-[#FEE2E2]',
    statusText: isPassed ? 'Passed' : 'Failed',
    statusDesc: isPassed 
      ? 'You passed the practice exam! Great job.' 
      : 'You need 70% or higher to pass',
    StatusIcon: isPassed ? CheckCircle2 : XCircle,
    steps: isPassed 
      ? ['Review explanations', 'Try another exam', 'Share achievement']
      : ['Study incorrect questions', 'Read all explanations', 'Retake when ready']
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl items-start">
      {/* LEFT */}
      <div className="flex-[2.5] bg-[#F8F9FA] rounded-[32px] p-10 border border-gray-100 flex flex-col">
        {/* Above */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <div className="max-w-md">
              <h2 className="text-[24px] font-bold text-black mb-2 tracking-tight">AWS CloudOps Engineer Associate</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Exam completed. Review your results below.</p>
            </div>
          </div>
          
          <div className={`w-32 h-32 flex items-center justify-center rounded-full ${theme.scoreHalo} shrink-0`}>
            <div className={`w-24 h-24 rounded-full ${theme.scoreBg} flex items-center justify-center shadow-md`}>
              <span className="text-4xl font-black text-white">{score}</span>
            </div>
          </div>
        </div>

        {/* Below */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard type="correct" count={correctCount} />
          <StatCard type="incorrect" count={incorrectCount} />
          <StatCard type="skipped" count={skippedCount} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 min-w-[300px] flex flex-col gap-6">
        <div className={`${theme.bannerBg} rounded-[24px] p-6 border ${theme.bannerBorder}`}>
          <div className="flex items-center gap-3 mb-2">
            <theme.StatusIcon size={24} className={theme.color} fill="white" />
            <span className={`text-[18px] font-bold ${theme.color}`}>{theme.statusText}</span>
          </div>
          <p className="text-gray-700 text-[13px] font-medium leading-snug">{theme.statusDesc}</p>
        </div>

        <div className="bg-[#F8F9FA] rounded-[24px] p-8 border border-gray-100">
          <h3 className="text-[17px] font-bold text-black mb-6">Next Steps</h3>
          <div className="space-y-4">
            {theme.steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="w-6 h-6 bg-white rounded-full border border-gray-200 flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</span>
                <span className="text-[12.5px] text-gray-500 font-medium leading-tight">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Component StatCard 
const StatCard = ({ type, count }: { type: 'correct' | 'incorrect' | 'skipped', count: number }) => {
  const configs = {
    correct: { icon: CheckCircle2, color: 'text-green-500', label: 'Correct' },
    incorrect: { icon: XCircle, color: 'text-red-500', label: 'Incorrect' },
    skipped: { icon: MinusCircle, color: 'text-black', label: 'Skipped' }
  };
  const { icon: Icon, color, label } = configs[type];

  return (
    <div className="bg-white rounded-[24px] py-5 px-4 border border-gray-50 flex flex-col items-center text-center shadow-sm">
      <div className="mb-3">
        <Icon size={28} className={color} strokeWidth={2.5} fill="white" />
      </div>
      <span className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mb-1">{label} Answers</span>
      <span className="text-2xl font-black text-black">{count}</span>
      <span className="text-[9px] font-bold text-gray-400 uppercase mt-0.5">Questions</span>
    </div>
  );
};
