import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GradientButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function GradientButton({ onClick, children }: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300
        hover:shadow-lg hover:shadow-purple-500/20 active:scale-95"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-105" />
      <div className="relative flex items-center text-white font-semibold text-lg">
        {children}
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}