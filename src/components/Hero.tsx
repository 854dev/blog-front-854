import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ContentMeta } from '../types/common';
import ContentList from './blogPost/ContentList';
import PageIntro from './PageIntro';

function Hero(props: { contentList: ContentMeta[] }) {
  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);
  return (
    <div className='hero is-vertical-align is-horizontal-align'>
      <PageIntro
        title='854 블로그'
        content='취미로 하는 블로그. 공부하고 기록하기'
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
          {isLogoMotionEnd ? <ContentList contentList={props.contentList} /> : null}
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
