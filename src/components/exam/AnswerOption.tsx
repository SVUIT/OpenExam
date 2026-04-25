import React from 'react';
import { Check } from 'lucide-react';

interface AnswerOptionProps {
  label: string;
  content: string;
  isSelected: boolean;
  onClick: () => void;
  type?: 'single' | 'multiple';
}

export const AnswerOption = ({ 
  label, 
  content, 
  isSelected, 
  onClick, 
  type = 'single' 
}: AnswerOptionProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-4 mb-3 cursor-pointer border-2 rounded-2xl transition-all shadow-sm
        ${isSelected 
          ? 'border-black bg-gray-50' 
          : 'border-gray-100 hover:border-gray-300 bg-white'
        }`}
    >
      {/* Type 1 and 2 - Single answers with circle checkbox */}
      {type === 'single' && (
        <div className={`w-8 h-8 shrink-0 flex items-center justify-center border-2 mr-4 rounded-full font-bold transition-colors
          ${isSelected 
            ? 'bg-black border-black text-white' 
            : 'border-gray-200 text-black'
          }`}
        >
          {label}
        </div>
      )}

      {/* Type 3 - Multiple answers with square checkbox */}
      {type === 'multiple' && (
        <div className={`w-6 h-6 shrink-0 rounded-md border-2 mr-4 flex items-center justify-center transition-all
          ${isSelected ? 'bg-black border-black' : 'border-gray-200 bg-white'}`}
        >
          {isSelected && <Check size={16} className="text-white" strokeWidth={3} />}
        </div>
      )}

      {/* Answer content */}
      <p className={`text-sm font-medium transition-colors ${isSelected ? 'text-black' : 'text-gray-500'}`}>
        {content}
      </p>
    </div>
  );
};
