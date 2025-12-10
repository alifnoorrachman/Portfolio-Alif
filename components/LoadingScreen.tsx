import React, { useEffect, useState } from 'react';
import { playSound } from '../utils/audio';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const codeLines = [
        "INITIALIZING KERNEL...",
        "LOADING ASSETS...",
        "MOUNTING VOLUMES...",
        "CHECKING MEMORY INTEGRITY...",
        "OPTIMIZING RENDERING ENGINE...",
        "ESTABLISHING SECURE TUNNEL...",
        "LOADING USER PROFILE...",
        "SYSTEM READY."
    ];

    let lineIndex = 0;
    const interval = setInterval(() => {
       if (lineIndex < codeLines.length) {
           setLines(prev => [...prev.slice(-10), codeLines[lineIndex]]); // Increased scroll buffer slightly
           playSound('type');
           lineIndex++;
       }
    }, 300);

    const progressInterval = setInterval(() => {
        setPercent(prev => {
            if (prev >= 100) {
                clearInterval(progressInterval);
                return 100;
            }
            return prev + 5;
        });
    }, 150);

    return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [percent, onComplete]);

  return (
    <div className="flex flex-col items-start justify-end h-full w-full bg-black p-8 font-mono text-xs md:text-sm">
      
      {/* Code Lines */}
      <div className="w-full space-y-1 mb-8">
        {lines.map((line, i) => (
            <div key={i} className="text-[#00ff41] opacity-80"> {line}</div>
        ))}
        <div className="animate-blink-fast text-[#00ff41]">_</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
          <div className="flex justify-between mb-2 text-[#00ff41]">
              <span>LOADING</span>
              <span>{percent}%</span>
          </div>
          <div className="w-full h-4 border border-[#00ff41] p-0.5">
              <div 
                className="h-full bg-[#00ff41] box-glow transition-all duration-200"
                style={{ width: `${percent}%` }}
              ></div>
          </div>
      </div>

    </div>
  );
};