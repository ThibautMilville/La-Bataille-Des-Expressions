import { motion } from 'framer-motion';

interface Profile {
  title: string;
  description: string;
  image: string;
}

interface ResultsProfileProps {
  profile: Profile;
  frenchCount: number;
  canadianCount: number;
}

export function ResultsProfile({ profile, frenchCount, canadianCount }: ResultsProfileProps) {
  return (
    <>
      <motion.img
        src={profile.image}
        alt={profile.title}
        className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full object-cover mb-6 sm:mb-8 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {profile.title}
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {profile.description}
      </motion.p>

      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg mx-4 sm:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Vos Choix</h2>
        <div className="flex justify-center gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">{frenchCount}</div>
            <div className="text-sm sm:text-base text-gray-600">Expressions Françaises</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-pink-600">{canadianCount}</div>
            <div className="text-sm sm:text-base text-gray-600">Expressions Canadiennes</div>
          </div>
        </div>
      </motion.div>
    </>
  );
}