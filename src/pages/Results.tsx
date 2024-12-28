import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RefreshCcw, Share2 } from 'lucide-react';
import { profiles } from '../data/profiles';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const choices = location.state?.choices || [];
  
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4">
      <div className="max-w-2xl mx-auto pt-8 text-center">
        <img
          src={profile.image}
          alt={profile.title}
          className="w-48 h-48 mx-auto rounded-full object-cover mb-8 shadow-lg"
        />
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{profile.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{profile.description}</p>
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full
              font-semibold transition-all duration-300 hover:bg-purple-700"
          >
            <RefreshCcw className="mr-2" />
            Rejouer
          </button>
          
          <button
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
          >
            <Share2 className="mr-2" />
            Partager
          </button>
        </div>
      </div>
    </div>
  );
}