'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PageIntro from '../components/PageIntro';
import { ContentMeta } from '../types/common';
import FadeWithIndex from '../components/motion/FadeWithIndex';
import ContentItem from '../components/blogPost/ContentItem';
import Card from '../components/card/Card';

interface Props {
  contentList: ContentMeta[];
}

export default function HomeClient(props: Props) {
  const { contentList } = props;
  const [isLogoMotionEnd, setIsLogoMotionEnd] = useState(false);

  return (
    <>
      <PageIntro
        title='854 블로그'
        onAnimationComplete={() => {
          setIsLogoMotionEnd(true);
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: isLogoMotionEnd ? 1 : 0, y: 0 }}
        transition={{ duration: 0.05 }}
      >
        <div className='py-3'>
          <h3 className='text-center'>Recent Post</h3>
          {isLogoMotionEnd ? (
            <FadeWithIndex idx={1}>
              <div className='p-2 row'>
                {contentList.map((elem) => {
                  return (
                    <div className='col-4-lg col-6-md col-12' key={elem.contentId}>
                      <Card clickable>
                        <ContentItem {...elem} />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </FadeWithIndex>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}
