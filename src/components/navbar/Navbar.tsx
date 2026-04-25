import Link from 'next/link';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
  isLoggedIn?: boolean;
  userName?: string;
}

export const Navbar = ({ 
  variant = 'solid', 
  isLoggedIn = false, 
  userName = "Name" 
}: NavbarProps) => {
  return (
    <nav className={`w-full flex items-center justify-between px-10 py-4 z-50 font-inter 
      ${variant === 'transparent' ? 'bg-transparent' : 'bg-black'}`}>
      
      {/* Left */}
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
          <div className="w-2.5 h-2.5 border-[1.5px] border-white rounded-full"></div>
        </div>
        {/* Font Inter 24pt */}
        <span className="text-white font-normal text-[24px] tracking-tighter leading-none select-none">
          OpenExam
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6 text-white text-sm font-semibold">
        {!isLoggedIn ? (
          <div className="flex items-center gap-6">
            <Link href="/signin" className="hover:opacity-70 transition-all">Sign in</Link>
            <div className="w-[1px] h-4 bg-white/30" />
            <Link href="/signup" className="hover:opacity-70 transition-all">Sign up</Link>
          </div>
        ) : (
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="text-white font-medium text-base group-hover:text-gray-300 transition-colors">
              {userName}
            </span>
            <div className="w-10 h-10 bg-white rounded-full p-[0.5px] shrink-0">
              <div className="w-full h-full rounded-full bg-exam-card border border-gray-100 overflow-hidden">
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
