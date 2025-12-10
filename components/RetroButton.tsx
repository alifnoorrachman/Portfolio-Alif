import React from 'react';
import { playSound } from '../utils/audio';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  label,
  active = false,
  className = '',
  onMouseEnter,
  onClick,
  ...props 
}) => {
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound('hover');
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound('select');
    if (onClick) onClick(e);
  };

  return (
    <button 
      className={`relative flex flex-col items-center justify-center transition-all duration-100 ${className} ${active ? 'bg-[#00ff41] text-black' : 'text-[#00ff41] hover:bg-[#001100]'}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      <div className="text-[10px] md:text-sm font-bold tracking-wider">
        {active ? `> ${label} <` : label}
      </div>
      
      {/* Active Indicator Line */}
      {active && <div className="absolute top-0 left-0 w-full h-1 bg-black opacity-20"></div>}
    </button>
  );
};