import api from '../api/api';
import PageIntro from '../components/PageIntro';
import ContentList from '../components/blogPost/ContentList';
import { motion } from 'framer-motion';
import { useState } from 'react';

export async function getStaticProps() {
  let contentList = [];

  try {
    const res = await api.content.getContentList({
      page: 1,
      limit: 10,
      contentTypeId: 1,
    });
    contentList = res.data.data;
  } catch {}

  return {
    props: { contentList }, // will be passed to the page component as props
  };
}

export default function Home({ contentList }) {
  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);

  return (
    <div>
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
          {isLogoMotionEnd ? <ContentList contentList={contentList} /> : null}
        </div>
      </motion.div>
    </div>
  );
}
