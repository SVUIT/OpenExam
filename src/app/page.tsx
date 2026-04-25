'use client';

import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
// Import Component 
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { TestCard } from '@/components/dashboard/TestCard';
import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter flex flex-col">
      
      {/* Navbar Component */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar 
          isLoggedIn={true} 
          userName="User Name" 
          variant="transparent" 
        />
      </div>

      {/* HERO SECTION */}
      <div 
        className="relative w-full h-[650px] bg-black overflow-hidden shrink-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)' }}
      >
        <div className="absolute inset-0 bg-[url('/homebg.jpg')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16 text-center">
          <h1 className="text-[56px] font-black text-white tracking-tight mb-0 leading-tight">
            WARM WELCOME
          </h1>
          <h1 className="text-[80px] font-black tracking-tight mb-10 leading-none bg-gradient-to-r from-[#EEE5E5] to-[#D30001] bg-clip-text text-transparent">
            TO ALL MY WARRIORS
          </h1>
          
          <Button 
            className="bg-white !text-black font-bold text-[20px] px-10 py-4 rounded-[16px] mb-4 hover:bg-white/20 hover:!text-white hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            Submit question
          </Button>
          
          <p className="text-gray-300 font-medium text-[15px]">
            To help improve our test bank
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-10 pt-16 pb-10">
        <div className="mb-12">
          <h2 className="text-[40px] font-bold text-text-primary tracking-tight mb-3">
            Available Practice Exams
          </h2>
          <p className="text-[20px] text-gray-700 font-normal">
            Choose a certification to start practicing. All exams are free and community-driven.
          </p>
        </div>

      {/* Grid Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestCard 
            title="AWS CloudOps Engineer Associate"
            description="Validate your ability to deploy, manage, and operate workloads on AWS"
            questionCount={5}
            duration={130}
          />
          <TestCard 
            title="GCP Associate Cloud Engineer"
            description="Demonstrate your ability to deploy applications, monitor operations"
            questionCount={10}
            duration={60}
          />
          <TestCard 
            title="Azure Fundamentals"
            description="Prove your knowledge of cloud concepts, Azure services"
            questionCount={15}
            duration={90}
          />
        </div>

        {/* ABOUT SECTION */}
        `<div className="mt-28 mb-20">
          <div className="bg-[#F2EBEB] p-10 rounded-[24px]">
            <h2 className="text-[28px] font-bold text-black border-b-[4px] border-black pb-1 inline-block mb-6">
              About OpenExam
            </h2>
            
            <p className="text-gray-800 text-[17px] leading-relaxed font-medium mb-2">
              OpenExam is a free, community-driven platform for cloud certification practice. All questions are submitted and 
              reviewed by the community to help you prepare for your certification exams.
            </p>
            <p className="text-gray-800 text-[17px] leading-relaxed font-medium">
              Want to contribute? Click "Submit Question" to add your own practice questions and help others prepare for their 
              certifications.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
