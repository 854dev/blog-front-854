import api from '../api/api';
import PageIntro from '../components/PageIntro';
import ContentList from '../components/blogPost/ContentList';
import { motion } from 'framer-motion';
import { useState } from 'react';

export async function getStaticProps() {
  const res = await api.content.getList({
    page: 1,
    limit: 5,
    contentTypeId: 1,
  });

  return {
    props: { contentList: res.data.data }, // will be passed to the page component as props
  };
}

export default function Home({ contentList }) {
  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);

  return (
    <div>
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
          {isLogoMotionEnd ? <ContentList contentList={contentList} /> : null}
        </div>
      </motion.div>
    </div>
  );
}
