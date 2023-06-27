import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import PageIntro from '../../components/PageIntro';
import { useRouter } from 'next/router';
import { ContentMeta, ContentType } from '../../types/common';
import FadeWithIndex from '../../components/motion/FadeWithIndex';
import ContentItem from '../../components/blogPost/ContentItem';
import Card from '../../components/card/Card';
import Pagination from '../../components/Pagination';

export async function getServerSideProps(context) {
  const { page = 1, limit = 12, contentType } = context.query;

  const res = await api.content.getContentList({
    page,
    limit,
    contentTypeName: contentType,
  });

  return {
    props: {
      contentList: res.data?.data ?? [],
      page: Number(page),
      totalPage: res.data.totalPage,
    },
  };
}

interface Props {
  page: number;
  totalPage: number;
  contentList: ContentMeta[];
}

function ContnentTypeIndex(props: Props) {
  const router = useRouter();
  const { contentType } = router.query;
  const { contentList, page: initPage, totalPage } = props;

  const [page, setpage] = useState(Number(initPage));

  const onChangePage = (page: number) => {
    // 현재 URL에 쿼리스트링 붙이기
    const current = new URL(window.location.href);
    current.searchParams.delete('page');
    current.searchParams.append('page', page.toString());
    router.push(current);
  };

  return (
    <div>
      <PageIntro title={contentType}></PageIntro>
      <FadeWithIndex idx={1}>
        <div className='p-2 row'>
          {contentList.map((elem, idx) => {
            return (
              <div className='col-4' key={elem.contentId}>
                <Card clickable>
                  <ContentItem key={elem.contentId} {...elem} />
                </Card>
              </div>
            );
          })}
        </div>

        <Pagination
          totalPage={totalPage}
          page={page ?? 1}
          setPage={setpage}
          onChange={onChangePage}
        />
      </FadeWithIndex>
    </div>
  );
}
``;

export default ContnentTypeIndex;
