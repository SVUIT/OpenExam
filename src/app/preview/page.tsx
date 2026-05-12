'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

// --- 1. COMMON COMPONENTS ---
import { Button } from '@/components/common/Button';

// --- 2. LAYOUT COMPONENTS ---
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';

// --- 3. DASHBOARD COMPONENTS ---
import { TestCard } from '@/components/dashboard/TestCard';
import { TestListItem } from '@/components/dashboard/TestListItem';

// --- 4. EXAM COMPONENTS ---
import { QuestionHeader } from '@/components/exam/QuestionHeader';
import { ProgressBar } from '@/components/exam/ProgressBar';
import { AnswerOption } from '@/components/exam/AnswerOption';
import { QuestionNav } from '@/components/exam/QuestionNav';

// --- 5. RESULT COMPONENTS ---
import { ResultBanner } from '@/components/result/ResultBanner';
import { AnswerSummaryItem } from '@/components/result/AnswerSummaryItem';
import { ReviewAccordion } from '@/components/result/ReviewAccordion';

export default function PreviewAllPage() {
  const [selectedAns, setSelectedAns] = useState<string | null>(null);

  // mock datas
  const mockAnswers = [
    { label: 'A', text: 'Amazon S3' },
    { label: 'B', text: 'Amazon EC2' },
    { label: 'C', text: 'AWS Lambda' },
    { label: 'D', text: 'Amazon RDS' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-10 flex flex-col gap-16 font-inter">
    

      {/* COMMON */}
      <section className="space-y-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 bg-blue-100 inline-block px-4 py-2 rounded-full">1. Common Components</h2>
        <div className="flex flex-wrap items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary" icon={Play}>Secondary w/ Icon</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="space-y-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 bg-blue-100 inline-block px-4 py-2 rounded-full">2. Dashboard Components</h2>
        
        <h3 className="font-bold text-gray-400">Test Card (Grid Item)</h3>
        <TestCard 
          title="AWS CloudOps Engineer Associate"
          description="Validate your ability to deploy, manage, and operate workloads on AWS"
          questionCount={65}
          duration={130}
        />

        <h3 className="font-bold text-gray-400 mt-8">Test List Item (Table Row)</h3>
        <div className="max-w-4xl flex flex-col gap-2">
          <TestListItem 
            title="Exam question" 
            questions={40} 
            duration={60} 
            category="Google Cloud" 
          />
          <TestListItem 
            title="Azure Developer Associate" 
            questions={50} 
            duration={120} 
            category="Microsoft Azure" 
          />
        </div>
      </section>

      {/* EXAM */}
      <section className="space-y-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 bg-blue-100 inline-block px-4 py-2 rounded-full">3. Exam Interface</h2>
        
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          {/* Header */}
          <QuestionHeader title="AWS Practice Test 1" subTitle="Choose the correct option" variant="slanted" time="02:45:10" />
          
          <div className="p-8 flex gap-10">
            <div className="flex-1 space-y-6">
              {/* Progress Bar */}
              <ProgressBar current={12} total={50} />
              
              {/* Options */}
              <div className="mt-8 space-y-3">
                <h3 className="font-bold text-lg mb-4">What is the best service to store unstructured data?</h3>
                {mockAnswers.map((ans) => (
                  <AnswerOption 
                    key={ans.label}
                    label={ans.label}
                    content={ans.text}
                    type="single"
                    isSelected={selectedAns === ans.label}
                    onClick={() => setSelectedAns(ans.label)}
                  />
                ))}
              </div>
            </div>

            <div className="w-[300px]">
              <h3 className="font-bold mb-4">Question Palette</h3>
              <QuestionNav total={20} current={12} answered={[1,2,3,4,5]} flagged={[3,8]} onJump={() => {}} />
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="space-y-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 bg-blue-100 inline-block px-4 py-2 rounded-full">4. Result & Review</h2>
        
        <h3 className="font-bold text-gray-400">Result Banner</h3>
        <ResultBanner score={85} correctCount={42} incorrectCount={6} skippedCount={2} />

        <h3 className="font-bold text-gray-400 mt-8">Answer Summary (Card ngang)</h3>
        <div className="max-w-4xl">
          <AnswerSummaryItem id={1} status="Correct" isFlagged={true} questionText="What is AWS Lambda?" selectedLabel="C" selectedContent="Serverless compute service" />
        </div>

        <h3 className="font-bold text-gray-400 mt-8">Review Accordion (Chi tiết từng câu)</h3>
        <div className="max-w-4xl">
          <ReviewAccordion 
            question={{ id: 1, text: "Which service is used for object storage?" }}
            isCorrect={true}
            answers={mockAnswers}
            userAnswerLabel="A"
            correctAnswerLabel="A"
            explanation="Amazon S3 is a scalable object storage service perfect for unstructured data."
          />
        </div>
      </section>

      {/* LAYOUT */}
      <section className="space-y-6">
        <h2 className="text-sm font-black uppercase tracking-widest text-blue-600 bg-blue-100 inline-block px-4 py-2 rounded-full">5. Navbar & Footer</h2>
        
        <div className="bg-gray-200 p-8 rounded-3xl space-y-8">
          {/* Navbar Guest */}
          <div className="rounded-xl overflow-hidden shadow-lg"><Navbar isLoggedIn={false} /></div>
          {/* Navbar Logged In */}
          <div className="rounded-xl overflow-hidden shadow-lg"><Navbar isLoggedIn={true} userName="User Name" /></div>
          {/* Footer */}
          <div className="rounded-xl overflow-hidden shadow-lg"><Footer /></div>
        </div>
      </section>

    </div>
  );
}




