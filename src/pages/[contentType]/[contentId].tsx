import React from 'react';
import api from '../../api/api';
import ContentBody from '../../components/blogPost/ContentBody';
import ContentMeta from '../../components/blogPost/ContentMeta';
import { ContentDetail } from '../../types/common';
import { motion } from 'framer-motion';

export async function getServerSideProps(context) {
  const { contentId } = context.query;

  const res = await api.content.getContentDetail({
    contentId,
  });

  console.log(res.data);

  return { props: { contentDetail: res.data ?? {} } };
}

function Post(props: { contentDetail: ContentDetail }) {
  const { contentDetail } = props;
  const { body } = contentDetail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ContentMeta {...contentDetail} />
      {Object.entries(body).map(([key, value]) => {
        return (
          <React.Fragment key={key}>
            <ContentBody key={key} value={value} />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}

export default Post;
