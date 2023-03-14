import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import api from '../api/api';
import { ContentMeta } from '../types/common';
import ContentList from './blogPost/ContentList';
import Introduction from './IntroDuction';

function Hero() {
  const [isPostShow, setisPostShow] = useState(false);
  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);
  const [recentPost, setRecentPost] = useState<ContentMeta[]>([]);

  const getPosts = async () => {
    const res = await api.content.getList({ page: 1, limit: 5, contentTypeId: 1 });
    setRecentPost(res.data.data);
    setisPostShow(true);
  };

  useEffect(() => {
    if (isLogoMotionEnd) {
      getPosts();
    }
  }, [isLogoMotionEnd]);

  return (
    <div className='hero is-vertical-align is-horizontal-align'>
      <Introduction
        title='854 블로그'
        content='취미로 하는 블로그. 공부하고 기록하기'
        onAnimationComplete={() => {
          setisLogoMotionEnd(true);
        }}
      ></Introduction>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: isPostShow ? 1 : 0, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='row'>
          <div className='col-12'>
            <h2>Recent Post</h2>
            <ContentList contentList={recentPost} />
            <Link href={'/posts'}>more</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
