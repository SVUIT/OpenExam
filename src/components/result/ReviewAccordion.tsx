'use client';
import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface Answer {
  label: string;
  text: string;
}

interface ReviewAccordionProps {
  question: { id: number; text: string };
  isCorrect: boolean;
  answers: Answer[];
  userAnswerLabel: string;
  correctAnswerLabel: string;
  explanation: string;
}

export const ReviewAccordion = ({ 
  question, isCorrect, answers, userAnswerLabel, correctAnswerLabel, explanation 
}: ReviewAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = {
    border: isCorrect ? 'border-green-300' : 'border-red-300',
    bg: isCorrect ? 'bg-[#E8F5E9]' : 'bg-[#FFEBEE]',
    idCircle: isCorrect ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500',
  };

  return (
    <div className={`mb-4 border-2 rounded-[10px] overflow-hidden transition-all ${theme.border} ${theme.bg}`}>
      {/* HEADER */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-5 cursor-pointer select-none"
      >
        <div className="flex items-center gap-5">
          <div className={`w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center font-bold ${theme.idCircle}`}>
            {question.id}
          </div>
          <p className="font-bold text-gray-800 line-clamp-1">{question.text}</p>
        </div>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {/* Content */}
      {isOpen && (
        <div className="px-5 pb-5">
          <div className="bg-white rounded-[10px] p-6 shadow-sm flex flex-col gap-3">
            {/* Answers List */}
            {answers.map((ans) => {
              const isCorrectAns = ans.label === correctAnswerLabel;
              const isUserChoice = ans.label === userAnswerLabel;
              const isWrongChoice = isUserChoice && !isCorrectAns;

              return (
                <div 
                  key={ans.label}
                  className={`flex items-center justify-between p-4 rounded-[8px] border-2 transition-all
                    ${isCorrectAns ? 'bg-green-50 border-green-400 text-green-700' : 
                      isWrongChoice ? 'bg-red-50 border-red-400 text-red-700' : 
                      'bg-gray-100 border-transparent text-gray-500'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white
                      ${isCorrectAns ? 'bg-green-500' : isWrongChoice ? 'bg-red-500' : 'bg-gray-400'}`}>
                      {ans.label}
                    </div>
                    <span className="text-sm font-semibold">{ans.text}</span>
                  </div>
                  {isCorrectAns && <CheckCircle2 size={20} fill="white" />}
                  {isWrongChoice && <XCircle size={20} fill="white" />}
                </div>
              );
            })}

            {/* Explanation */}
            <div className="mt-4 p-5 bg-[#E0F7FA] rounded-[10px] border border-cyan-100">
              <div className="flex items-center gap-2 mb-2 text-yellow-600">
                <Lightbulb size={18} fill="currentColor" className="text-yellow-400" />
                <span className="font-bold text-sm text-gray-700">Explanation</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                {explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
