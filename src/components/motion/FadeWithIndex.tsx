import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

function FadeWithIndex(props: PropsWithChildren<{ idx: number }>) {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [10, 0] }}
      transition={{ duration: Math.min(0.2 * props.idx, 1) }}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeWithIndex;
