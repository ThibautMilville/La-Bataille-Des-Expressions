import { useNavigate } from 'react-router-dom';
import { GradientButton } from '../components/GradientButton';
import { SleepyCatLogo } from '../components/SleepyCatLogo';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center space-y-8">
          <div className="flex justify-center scale-150 mb-12">
            <SleepyCatLogo />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              La Bataille Des Expressions
            </span>
          </h1>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-gray-600">
              Découvrez votre personnalité linguistique à travers les expressions françaises et québécoises !
            </p>
            
            <p className="text-lg text-gray-500">
              Un jeu captivant qui teste votre affinité avec les expressions des deux côtés de l'Atlantique.
            </p>
          </div>

          <div className="pt-4">
            <GradientButton onClick={() => navigate('/game')}>
              Jouer maintenant
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}