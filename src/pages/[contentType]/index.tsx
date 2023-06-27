import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import PageIntro from '../../components/PageIntro';
import { useRouter } from 'next/router';
import { ContentMeta, ContentType } from '../../types/common';
import FadeWithIndex from '../../components/motion/FadeWithIndex';
import ContentItem from '../../components/blogPost/ContentItem';
import Card from '../../components/card/Card';

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
      <div className='p-2 content-list row'>
        {contentList.map((elem, idx) => {
          return (
            <div className='col-4' key={elem.contentId}>
              <FadeWithIndex idx={idx}>
                <Card>
                  <ContentItem key={elem.contentId} {...elem} />
                </Card>
              </FadeWithIndex>
            </div>
          );
        })}
      </div>
    </div>
  );
}
``;

export default ContnentTypeIndex;