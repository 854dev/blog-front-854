'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PageIntro from '../../components/PageIntro';
import { ContentMeta } from '../../types/common';
import FadeWithIndex from '../../components/motion/FadeWithIndex';
import ContentItem from '../../components/blogPost/ContentItem';
import Card from '../../components/card/Card';
import Pagination from '../../components/Pagination';

interface Props {
  contentType: string;
  page: number;
  totalPage: number;
  contentList: ContentMeta[];
}

export default function ContentTypeClient(props: Props) {
  const router = useRouter();
  const { contentType, contentList, page: initPage, totalPage } = props;
  const [page, setPage] = useState(Number(initPage));

  const onChangePage = (nextPage: number) => {
    const current = new URL(window.location.href);
    current.searchParams.set('page', nextPage.toString());
    router.push(`${current.pathname}${current.search}`);
  };

  return (
    <div>
      <PageIntro title={contentType} />
      <FadeWithIndex idx={1}>
        <div className='p-2 row'>
          {contentList.map((elem) => {
            return (
              <div className='col-4' key={elem.contentId}>
                <Card clickable>
                  <ContentItem {...elem} contentTypeName={elem.contentTypeName ?? contentType} />
                </Card>
              </div>
            );
          })}
        </div>

        <Pagination totalPage={totalPage} page={page ?? 1} setPage={setPage} onChange={onChangePage} />
      </FadeWithIndex>
    </div>
  );
}
