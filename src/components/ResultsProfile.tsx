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
    </>
  );
}