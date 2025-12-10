import React from 'react';

export const CRTOverlay: React.FC = () => {
  return (
    <>
      <div className="scanlines" />
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_90%)]" />
    </>
  );
};