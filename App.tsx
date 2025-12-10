import React, { useState } from 'react';
import { AppState } from './types';
import { LoadingScreen } from './components/LoadingScreen';
import { StartScreen } from './components/StartScreen';
import { MainMenu } from './components/MainMenu';
import { CRTOverlay } from './components/CRTOverlay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOADING);

  const handleLoadingComplete = () => {
    setAppState(AppState.START_SCREEN);
  };

  const handleStartGame = () => {
    setAppState(AppState.MAIN_MENU);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-[#00ff41] crt">
      
      {/* Subtle Terminal Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#003300 1px, transparent 1px), linear-gradient(90deg, #003300 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-8">
        <main className="flex-1 flex flex-col relative border-2 border-[#00ff41] box-glow rounded-lg overflow-hidden bg-black/90">
          
          {/* Status Bar Top */}
          <div className="flex justify-between items-center p-2 border-b border-[#00ff41] bg-[#001100] text-[10px] md:text-xs">
            <span>SYS.ADMIN: ALIF NOOR RACHMAN</span>
            <span>MEM: 64TB OK</span>
            <span>ONLINE</span>
          </div>

          <div className="flex-1 relative overflow-hidden">
            {appState === AppState.LOADING && (
              <LoadingScreen onComplete={handleLoadingComplete} />
            )}

            {appState === AppState.START_SCREEN && (
              <StartScreen onStart={handleStartGame} />
            )}

            {appState === AppState.MAIN_MENU && (
              <MainMenu />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;