import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Màu hệ thống theo tài liệu Spec
        brand: {
          primary: '#404040', // Header Background, Highlight Gradient
          secondary: '#EEE5E5',
        },
        exam: {
          card: '#E7E7E7',    // Màu nền Exam Card
          about: '#F2EBEB',   // Màu nền Tab About OpenExam
          bg: '#F8F9FA',      // Màu nền trang xám nhạt (Result page)
        },
        system: {
          success: '#36D025',     // Xanh lá (Correct)
          successBg: '#EBFBEA',   // Xanh lá nhạt (Background)
          error: '#EF4444',       // Đỏ (Incorrect)
          errorBg: '#FEEDED',     // Đỏ nhạt (Background)
          flag: '#0086ED',        // Xanh dương (Flagged)
        },
        text: {
          primary: '#000000',
          secondary: '#CACACA',
          muted: '#A1A1AA',
        }
      },
      // Thêm font Inter
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;