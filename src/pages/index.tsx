import api from '../api/api';
import PageIntro from '../components/PageIntro';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContentMeta } from '../types/common';
import FadeWithIndex from '../components/motion/FadeWithIndex';
import ContentItem from '../components/blogPost/ContentItem';
import Card from '../components/card/Card';

export async function getServerSideProps(context) {
  const { page = 1, limit = 50, contentType = 'post' } = context.query;

  const res = await api.content.getContentList({
    page,
    limit,
    contentTypeName: contentType,
  });

  return { props: { contentList: res.data?.data ?? [] } };
}

interface Props {
  contentList: ContentMeta[];
}

export default function Home(props: Props) {
  const { contentList } = props;

  const [isLogoMotionEnd, setisLogoMotionEnd] = useState(false);

  return (
    <>
      <PageIntro
        title='854 블로그'
        onAnimationComplete={() => {
          setisLogoMotionEnd(true);
        }}
      ></PageIntro>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: isLogoMotionEnd ? 1 : 0, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className='py-3'>
          <h3 className='text-center'>Recent Post</h3>
          {isLogoMotionEnd ? (
            <div className='p-2 row'>
              {contentList.map((elem, idx) => {
                return (
                  <div className='col-4' key={elem.contentId}>
                    <FadeWithIndex idx={idx}>
                      <Card>
                        <ContentItem key={elem.contentId} {...elem} />
                      </Card>
                    </FadeWithIndex>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}
