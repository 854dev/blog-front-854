import React from 'react';
import { ContentMeta } from '../../types/common';
import ContentCard from './ContentCard';

function ContentList(props: { contentList: ContentMeta[] }) {
  const { contentList } = props;
  return (
    <div className='p-2 content-list row'>
      {contentList.map((elem) => (
        <div className='col-12'>
          <ContentCard key={elem.contentId} {...elem} />
        </div>
      ))}
    </div>
  );
}

export default ContentList;
