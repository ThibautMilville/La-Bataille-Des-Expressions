import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

interface ExpressionCardProps {
  text: string;
  translation: string;
  description: string;
  onClick: () => void;
  type: 'french' | 'canadian';
  isSelected?: boolean;
}

export default function ExpressionCard({ 
  text, 
  translation, 
  description, 
  onClick, 
  type,
  isSelected 
}: ExpressionCardProps) {
  const baseColors = type === 'french' 
    ? 'from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400' 
    : 'from-red-50 to-rose-50 border-red-200 hover:border-red-400';

  return (
    <button
      onClick={onClick}
      className={`w-full max-w-sm p-6 bg-gradient-to-br ${baseColors} 
        border-2 rounded-xl shadow-lg transition-all duration-300 
        transform hover:scale-102 hover:shadow-xl
        ${isSelected ? 'scale-95 opacity-50' : ''}
        active:scale-95 md:hover:scale-105`}
    >
      <div className="flex items-center justify-between mb-4">
        <Sparkles className={`w-6 h-6 ${type === 'french' ? 'text-blue-500' : 'text-red-500'}`} />
        <div className="flex items-center">
          <MapPin className={`w-4 h-4 mr-1 ${type === 'french' ? 'text-blue-400' : 'text-red-400'}`} />
          <span className="text-sm font-medium">
            {type === 'french' ? 'France' : 'Québec'}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold">{text}</h3>
        <p className="text-gray-600 italic">{translation}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm font-medium text-gray-500">
          Cliquez pour choisir cette expression
        </span>
      </div>
    </button>
  );
}