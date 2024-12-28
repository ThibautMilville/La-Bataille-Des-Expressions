import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GradientButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function GradientButton({ onClick, children }: GradientButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative px-8 py-4 rounded-full overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative flex items-center text-white font-semibold text-lg"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {children}
        <motion.div
          className="ml-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}