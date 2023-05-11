import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  title: React.ReactNode;
  content?: React.ReactNode;
  onAnimationComplete?: () => void;
};

function PageIntro(props: Props) {
  const { title, content, onAnimationComplete } = props;

  return (
    <motion.div
      className='is-full-width'
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }}
    >
      <div className='is-full-width'>
        <h1 className='text-center'>{title}</h1>
        {content ? <p className='text-center'>{content}</p> : null}
      </div>
    </motion.div>
  );
}

export default PageIntro;
