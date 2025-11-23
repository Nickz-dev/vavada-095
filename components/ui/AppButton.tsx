'use client';

import Link from 'next/link';

interface AppButtonProps {
  href: string;
  platform: 'ios' | 'android';
  icon: React.ReactNode;
  label: string;
  osLabel: string;
  className?: string;
}

/**
 * AppButton компонент
 * Переиспользуемая кнопка для приложений iOS и Android
 */
export default function AppButton({
  href,
  platform,
  icon,
  label,
  osLabel,
  className = ''
}: AppButtonProps) {
  const bgColor = platform === 'ios' ? '#303036' : '#309C4D';
  
  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`inline-flex items-center gap-3 px-4 py-3 rounded-lg transition-opacity hover:opacity-90 ${className}`}
      style={{ backgroundColor: bgColor, width: '141px' }}
    >
      <span className="flex-shrink-0">{icon}</span>
      <div className="flex flex-col text-white text-sm">
        <span>{label}</span>
        <span className="text-xs opacity-90">{osLabel}</span>
      </div>
    </Link>
  );
}

