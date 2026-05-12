// src/components/common/Badge.tsx
export const Badge = ({ text, variant = 'default' }: { text: string; variant?: string }) => {
    const styles: any = {
      success: 'bg-system-successBg text-system-success border-system-success/20',
      info: 'bg-system-flag/10 text-system-flag border-system-flag/20',
      default: 'bg-gray-50 text-text-muted border-gray-100',
    };
    return (
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${styles[variant] || styles.default}`}>
        {text}
      </span>
    );
  };
  