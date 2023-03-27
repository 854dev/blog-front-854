import React from 'react';
import api from '../../api/api';
import ContentBody from '../../components/blogPost/ContentBody';
import ContentMeta from '../../components/blogPost/ContentMeta';
import { ContentDetail } from '../../types/common';
import { motion } from 'framer-motion';

export async function getStaticProps(context) {
  const contentId = context.params.contentId;

  let contentDetail = [];

  try {
    const res = await api.content.getDetail(contentId);
    contentDetail = res.data;
  } catch {}

  return {
    props: { contentDetail },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  let paths = [];

  try {
    const res = await api.content.getList({ page: 1, limit: 10, contentTypeId: 1 });

    // Get the paths we want to pre-render based on posts
    paths = res.data.data.map((post) => ({
      params: { contentId: post.contentId.toString() },
    }));
  } catch {}

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
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
      {body.map((elem) => {
        return (
          <React.Fragment key={elem.schemaId}>
            <ContentBody {...elem} />
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}

export default Post;
