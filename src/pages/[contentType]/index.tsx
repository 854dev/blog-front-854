import React, { useEffect, useState } from 'react';
import ContentList from '../../components/blogPost/ContentList';
import api from '../../api/api';
import PageIntro from '../../components/PageIntro';
import { useRouter } from 'next/router';
import { ContentMeta, ContentType } from '../../types/common';

export async function getServerSideProps(context) {
  const { page = 1, limit = 50, contentType } = context.query;

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

function ContnentTypeIndex(props: Props) {
  const router = useRouter();
  const { contentType } = router.query;
  const { contentList } = props;

  return (
    <div>
      <PageIntro title={contentType}></PageIntro>

      <ContentList contentList={contentList}></ContentList>
    </div>
  );
}
``;

export default ContnentTypeIndex;
