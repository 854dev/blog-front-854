import React from 'react';
import api from '../../api/api';
import ContentBody from '../../components/blogPost/ContentBody';
import ContentMeta from '../../components/blogPost/ContentMeta';
import { ContentDetail } from '../../types/common';
import { motion } from 'framer-motion';
import Card from '../../components/card/Card';
import MetaHead from '../../components/MetaHead';

export async function getServerSideProps(context) {
  const { contentId } = context.query;

  const res = await api.content.getContentDetail({
    contentId,
  });

  return { props: { contentDetail: res.data ?? {} } };
}

function Post(props: { contentDetail: ContentDetail }) {
  const { contentDetail } = props;
  const { body } = contentDetail;

  return (
    <>
      <MetaHead meta={{ title: contentDetail.title, description: contentDetail.description }} />

      <motion.div
        className='px-2'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <Card>
          <div className='p-2'>
            <ContentMeta {...contentDetail} />
          </div>
        </Card>

        <div className='py-2'>
          <hr></hr>
        </div>

        {Object.entries(body).map(([key, value]) => {
          return (
            <React.Fragment key={key}>
              <ContentBody key={key} value={value} />
            </React.Fragment>
          );
        })}
      </motion.div>
    </>
  );
}

export default Post;
