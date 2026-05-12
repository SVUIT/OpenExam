import { Flag } from 'lucide-react';

export const QuestionNav = ({ total, current, answered = [], flagged = [], onJump }: any) => (
  <div className="grid grid-cols-4 gap-3 p-6 bg-gray-50/50 rounded-3xl border border-gray-100">
    {Array.from({ length: total }).map((_, i) => {
      const idx = i + 1;
      return (
        <button key={idx} onClick={() => onJump(idx)}
          className={`relative w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all
            ${current === idx ? 'ring-2 ring-black bg-white shadow-md' : ''}
            ${answered.includes(idx) ? 'bg-black text-white' : 'bg-white text-gray-300 border border-gray-100'}`}
        >
          {idx}
          {flagged.includes(idx) && <Flag size={10} className="absolute -top-1 -right-1 fill-red-500 text-red-500" />}
        </button>
      );
    })}
  </div>
);
