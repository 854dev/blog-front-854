import React, { useEffect, useState } from 'react';
import ContentList from '../../components/blogPost/ContentList';
import api from '../../api/api';
import PageIntro from '../../components/PageIntro';

export async function getStaticProps() {
  const res = await api.content.getList({
    page: 1,
    limit: 50,
    contentTypeId: 1,
  });

  return {
    props: { contentList: res.data.data }, // will be passed to the page component as props
  };
}

function PostIndex({ contentList }) {
  return (
    <div>
      <PageIntro title='Post' content='글, 배운것들'></PageIntro>

      <ContentList contentList={contentList} />
    </div>
  );
}

export default PostIndex;
