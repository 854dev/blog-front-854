import React, { useEffect, useState } from 'react';
import ContentList from '../../components/blogPost/ContentList';
import api from '../../api/api';
import PageIntro from '../../components/PageIntro';

export async function getStaticProps() {
  try {
    const res = await api.content.getContentList({
      page: 1,
      limit: 50,
      contentTypeId: 1,
    });

    return {
      props: { contentList: res.data.data }, // will be passed to the page component as props
    };
  } catch {
    return {
      props: { contentList: [] }, // will be passed to the page component as props
    };
  }
}

function PostIndex({ contentList }) {
  return (
    <div>
      <PageIntro title='Post'></PageIntro>

      <ContentList contentList={contentList} />
    </div>
  );
}

export default PostIndex;
