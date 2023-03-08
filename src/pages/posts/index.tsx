import React, { useEffect, useState } from 'react';
import ContentList from '../../components/blogPost/ContentList';
import api from '../../api/api';

export async function getStaticProps() {
  const res = await api.content.getList({
    page: 1,
    limit: 10,
  });

  return {
    props: { contentList: res.data }, // will be passed to the page component as props
  };
}

function PostIndex({ contentList }) {
  return (
    <div>
      <ContentList contentList={contentList} />
    </div>
  );
}

export default PostIndex;
