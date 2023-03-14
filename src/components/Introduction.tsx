import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  title: React.ReactNode;
  content: React.ReactNode;
  onAnimationComplete?: () => void;
};

function Introduction(props: Props) {
  const { title, content, onAnimationComplete } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }}
    >
      <div className='row'>
        <div className='col-12'>
          <h1>{title}</h1>
          <p className='text-center'>{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Introduction;
