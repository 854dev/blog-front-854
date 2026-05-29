'use client';

import { motion } from 'framer-motion';

export default function PostMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className='px-2'
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
