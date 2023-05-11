import api from '../api/api';
import PageIntro from '../components/PageIntro';
import ContentList from '../components/blogPost/ContentList';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);

  return (
    <>
      <PageIntro
        title='854 Blog'
        onAnimationComplete={() => {
          setisLogoMotionEnd(true);
        }}
      ></PageIntro>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: isLogoMotionEnd ? 1 : 0, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className='py-3'>
          <h3 className='text-center'>Recent Post</h3>
          {isLogoMotionEnd ? <ContentList contentList={[]} /> : null}
        </div>
      </motion.div>
    </>
  );
}
