// src/components/dashboard/TestCard.tsx
import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { Button } from '../common/Button';

interface TestCardProps {
  title: string;
  description: string;
  questionCount: number;
  duration: number;
  onTakeExam?: () => void;
}

export const TestCard = ({ 
  title, 
  description, 
  questionCount, 
  duration, 
  onTakeExam 
}: TestCardProps) => {
  return (
    <div className="bg-exam-card rounded-[20px] p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md h-full font-inter">
      
      {/* HEADER SECTION */}
      <div className="flex items-start gap-4 mb-5">
        <div className="pt-1">
          <svg width="32" height="32" viewBox="0 0 512 512" fill="none" stroke="black" strokeWidth="32" strokeLinejoin="round">
            <path d="M416 48H144a64 64 0 0 0-64 64v288a64 64 0 0 0 64 64h272V48z" />
            <path d="M416 416H144a64 64 0 0 1 0-128h272v128z" />
          </svg>
        </div>
        <h3 className="text-[24px] font-bold text-text-primary leading-tight">
          {title}
        </h3>
      </div>
      
      <p className="text-[16px] text-gray-700 mb-8 flex-1 leading-relaxed">
        {description}
      </p>
      
      <hr className="border-gray-300 mb-6" />
      
      <div className="flex items-center justify-center gap-10 mb-8 text-[14px] font-medium text-gray-800">
        <div className="flex items-center gap-2">
          <BookOpen size={18} /> {questionCount} questions
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} /> {duration} min
        </div>
      </div>
      
      <Button 
        variant="primary" 
        fullWidth 
        className="py-4 rounded-[12px] text-[18px]"
        onClick={onTakeExam}
      >
        Take exam
      </Button>
    </div>
  );
};
