import React from 'react';
import { Flag } from 'lucide-react';

interface AnswerSummaryItemProps {
  id: number;
  status: string;
  isFlagged: boolean;
  questionText: string;
  selectedLabel: string;
  selectedContent: string;
}

export const AnswerSummaryItem = ({ 
  id, 
  status, 
  isFlagged, 
  questionText, 
  selectedLabel, 
  selectedContent 
}: AnswerSummaryItemProps) => {
  return (
    // Thiết kế dạng Card với bo góc lớn và shadow nhẹ
    <div className="flex items-start justify-between p-6 bg-white rounded-[24px] mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 transition-all hover:shadow-md">
      <div className="flex gap-6">
        {/* Số thứ tự câu hỏi - Vòng tròn viền xám */}
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center font-medium text-black shrink-0">
          {id}
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Dòng Status và Flagged màu xanh dương */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-gray-400 font-medium">{status}</span>
            {isFlagged && (
              <div className="flex items-center gap-1 text-[#3B82F6] font-bold text-[13px]">
                <Flag size={14} fill="currentColor" />
                <span>Flagged</span>
              </div>
            )}
          </div>

          {/* Nội dung câu hỏi - Bold đen */}
          <h3 className="text-[17px] font-bold text-black leading-snug max-w-xl">
            {questionText}
          </h3>

          {/* Đáp án đã chọn - Vòng tròn đen chữ trắng */}
          <div className="flex items-center gap-3 mt-1">
            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[11px] font-bold shrink-0">
              {selectedLabel}
            </div>
            <p className="text-sm text-gray-600 line-clamp-1">
              {selectedContent}
            </p>
          </div>
        </div>
      </div>

      {/* Nút Xem lại ở góc phải */}
      <button className="text-[15px] font-bold text-black pt-1 transition-all hover:text-[#3B82F6] active:text-[#3B82F6]">
        Xem lại
      </button>
    </div>
  );
};
