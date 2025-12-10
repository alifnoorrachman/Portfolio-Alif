import React, { useEffect, useState } from 'react';
import { playSound } from '../utils/audio';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  const handleStart = () => {
    playSound('start');
    onStart();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleStart();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      
      <div className="w-full max-w-2xl p-8 border border-[#00ff41] bg-[#000500] shadow-[10px_10px_0_#003300]">
          
          <div className="mb-8 text-left space-y-2 text-xs md:text-sm text-[#008f11]">
            <p> ESTABLISHING SECURE CONNECTION...</p>
            <p> AUTHENTICATING USER...</p>
            <p> ACCESSING PORTFOLIO DATABASE...</p>
          </div>

          <div className="text-center my-12">
            <h1 className="text-3xl md:text-5xl font-bold terminal-shadow mb-4">
              ALIF NOOR RACHMAN
            </h1>
            <h2 className="text-sm md:text-lg tracking-[0.2em] text-[#00cc33] mt-4">
              UI/UX DESIGNER
            </h2>
            <h3 className="text-xs md:text-sm tracking-[0.1em] text-[#008f11] mt-2">
              INFORMATICS ENGINEERING
            </h3>
          </div>

          <div className="text-center mt-12">
            <button 
                className={`text-lg md:text-xl hover:bg-[#00ff41] hover:text-black px-4 py-2 transition-colors ${blink ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleStart}
            >
                [ EXECUTE_LOGIN ]
            </button>
          </div>

      </div>
      
    </div>
  );
};