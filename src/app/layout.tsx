import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // Khai báo biến để khớp với tailwind.config.ts
});

export const metadata: Metadata = {
  title: "OpenExam",
  description: "Study Vault of UIT", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Truyền biến font vào thẻ html
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="font-inter antialiased min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}