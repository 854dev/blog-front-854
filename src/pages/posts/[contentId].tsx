import axios from 'axios';
import React, { useEffect } from 'react';
import api from '../../api/api';
import ContentBody from '../../components/blogPost/ContentBody';
import ContentMeta from '../../components/blogPost/ContentMeta';
import { ContentDetail } from '../../types/common';

export async function getStaticProps(context) {
  const contentId = context.params.contentId;
  const res = await api.content.getDetail(contentId);
  return {
    props: { contentDetail: res.data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await api.content.getList({ page: 1, limit: 10 });

  // Get the paths we want to pre-render based on posts
  const paths = res.data.data.map((post) => ({
    params: { contentId: post.contentId.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

function Post(props: { contentDetail: ContentDetail }) {
  const { contentDetail } = props;
  const { body } = contentDetail;

  return (
    <>
      <ContentMeta {...contentDetail} />
      {body.map((elem) => {
        return (
          <>
            <ContentBody key={elem.schemaId} {...elem} />
          </>
        );
      })}
    </>
  );
}

export default Post;
