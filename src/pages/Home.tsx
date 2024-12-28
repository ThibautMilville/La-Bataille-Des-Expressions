import React from 'react';
import { Languages, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <Languages className="w-16 h-16 text-purple-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Expressions Françaises vs Québécoises
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez votre personnalité linguistique ! Êtes-vous plus français ou québécois dans vos expressions ?
        </p>
        <button
          onClick={() => navigate('/game')}
          className="group inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full
            font-semibold text-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
        >
          Commencer le Jeu
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}