import { useNavigate } from 'react-router-dom';
import { GradientButton } from '../components/GradientButton';
import { SleepyCatLogo } from '../components/SleepyCatLogo';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center space-y-4 px-4 sm:px-6 md:px-8 py-8">
        <div className="flex justify-center scale-100 sm:scale-125 mb-4 sm:mb-8">
          <SleepyCatLogo />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            La Bataille Des Expressions
          </span>
        </h1>

        <div className="space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
            Découvrez votre personnalité linguistique à travers les expressions françaises et québécoises !
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-500">
            Un jeu captivant qui teste votre affinité avec les expressions des deux côtés de l'Atlantique.
          </p>
        </div>

        <div className="pt-4 sm:pt-6">
          <GradientButton onClick={() => navigate('/game')}>
            Jouer Maintenant
          </GradientButton>
        </div>
      </div>
    </div>
  )
}