import React from 'react';
import { Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
          <Languages className="w-6 h-6" />
          <span className="font-bold text-lg">Expressions Franco-Québécoises</span>
        </Link>
      </div>
    </header>
  );
}