import { Link } from 'react-router-dom';
import { SleepyCatLogo } from './SleepyCatLogo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 group"
          >
            <SleepyCatLogo />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              La Bataille Des Expressions
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}