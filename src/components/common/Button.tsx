// src/components/common/Button.tsx
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right'; 
  fullWidth?: boolean;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  iconPosition = 'left', 
  fullWidth, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-gray-200 hover:border-black text-gray-900",
    white: "bg-white text-black hover:bg-gray-100 shadow-lg hover:scale-105" 
  };

  return (
    <button 
      className={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all active:scale-95 ${styles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`} 
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </button>
  );
};
