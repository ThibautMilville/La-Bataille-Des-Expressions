import { useNavigate } from 'react-router-dom';
import { GradientButton } from '../components/GradientButton';
import { SleepyCatLogo } from '../components/SleepyCatLogo';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center space-y-6 sm:space-y-8">
        <div className="flex justify-center scale-110 sm:scale-125 mb-6 sm:mb-8">
          <SleepyCatLogo />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight px-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-tight">
            La Bataille Des Expressions
          </span>
        </h1>

        <div className="space-y-4 sm:space-y-6 px-6 sm:px-8">
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            Découvrez votre personnalité linguistique à travers les expressions françaises et québécoises !
          </p>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Un jeu captivant qui teste votre affinité avec les expressions des deux côtés de l'Atlantique.
          </p>
        </div>

        <div className="pt-6 sm:pt-8">
          <GradientButton onClick={() => navigate('/game')}>
            Jouer Maintenant
          </GradientButton>
        </div>
      </div>
    </div>
  );
}