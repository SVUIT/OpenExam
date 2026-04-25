import React from 'react';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

interface TestListItemProps {
  title: string;
  questions: number;
  duration: number;
  category: string;
}

export const TestListItem = ({ title, questions, duration, category }: TestListItemProps) => {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-[20px] border border-gray-100 hover:border-brand-primary/50 hover:shadow-md transition-all group cursor-pointer font-inter">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-exam-bg rounded-[16px] flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
          <BookOpen className="w-7 h-7 text-text-primary" />
        </div>
        
        <div className="space-y-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-text-muted">
            {category}
          </span>
          <h4 className="text-[18px] font-bold text-text-primary leading-tight">
            {title}
          </h4>
          
          <div className="flex items-center gap-4 text-[13px] font-medium text-text-muted">
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              {duration} min
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen size={14} />
              {questions} questions
            </div>
          </div>
        </div>
      </div>

      <div className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted group-hover:text-text-primary group-hover:bg-gray-50 transition-all">
        <ChevronRight size={24} />
      </div>
    </div>
  );
};
