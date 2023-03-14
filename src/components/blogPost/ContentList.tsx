import React, { useState } from 'react';
import { ContentMeta } from '../../types/common';
import ContentCard from './ContentCard';
import { motion } from 'framer-motion';

function ContentList(props: { contentList: ContentMeta[] }) {
  const { contentList } = props;

  return (
    <div className='p-2 content-list row'>
      {contentList.map((elem, idx) => (
        <div className='col-12' key={elem.contentId}>
          <motion.div
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: Math.min(0.2 * idx, 1) }}
          >
            <ContentCard key={elem.contentId} {...elem} />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default ContentList;
