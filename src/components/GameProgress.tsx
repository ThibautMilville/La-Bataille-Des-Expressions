import React from 'react';
import { CircleDot } from 'lucide-react';

interface GameProgressProps {
  currentRound: number;
  totalRounds: number;
}

export default function GameProgress({ currentRound, totalRounds }: GameProgressProps) {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      <div className="hidden md:flex space-x-2">
        {Array.from({ length: totalRounds }).map((_, index) => (
          <CircleDot
            key={index}
            className={`w-4 h-4 transition-colors duration-300 ${
              index < currentRound
                ? 'text-purple-500'
                : index === currentRound
                ? 'text-purple-300 animate-pulse'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="md:hidden text-lg font-medium text-purple-600">
        {currentRound + 1} / {totalRounds}
      </div>
    </div>
  );
}