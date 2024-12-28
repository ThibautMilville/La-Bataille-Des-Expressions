import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RefreshCcw, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { profiles } from '../data/profiles';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const choices = location.state?.choices || [];

  useEffect(() => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const colors = ['#9333ea', '#ec4899'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  const getFrenchPercentage = () => {
    const frenchCount = choices.filter((choice: string) => choice === 'french').length;
    return (frenchCount / choices.length) * 100;
  };

  const getProfile = () => {
    const frenchPercentage = getFrenchPercentage();
    return profiles.find((profile) => {
      if (frenchPercentage >= 80 && profile.id === 'le-roi-fromage') return true;
      if (frenchPercentage <= 20 && profile.id === 'bucheron') return true;
      if (frenchPercentage > 40 && frenchPercentage < 60 && profile.id === 'franco-cameleon') return true;
      if (frenchPercentage <= 30 && profile.id === 'sirop-erable') return true;
      if (frenchPercentage >= 70 && profile.id === 'poete-parisien') return true;
      return false;
    }) || profiles[2];
  };

  const profile = getProfile();
  const frenchCount = choices.filter((choice: string) => choice === 'french').length;
  const canadianCount = choices.filter((choice: string) => choice === 'canadian').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={profile.image}
          alt={profile.title}
          className="w-48 h-48 mx-auto rounded-full object-cover mb-8 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />

        <motion.h1
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {profile.title}
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {profile.description}
        </motion.p>

        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vos Choix</h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{frenchCount}</div>
              <div className="text-gray-600">Expressions Françaises</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{canadianCount}</div>
              <div className="text-gray-600">Expressions Canadiennes</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full
              font-semibold transition-all duration-300 hover:bg-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCcw className="mr-2" />
            Rejouer
          </motion.button>

          <motion.button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Mon Profil d\'Expressions Franco-Québécoises',
                  text: `Je suis ${profile.title} ! Jouez au jeu des expressions pour découvrir votre profil !`,
                  url: window.location.href
                });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-full
              font-semibold transition-all duration-300 hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="mr-2" />
            Partager
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}