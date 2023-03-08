import React from 'react';
import { ContentMeta } from '../../types/common';
import ContentCard from './ContentCard';

function ContentList(props: { contentList: ContentMeta[] }) {
  const { contentList } = props;
  return (
    <div className='content-list'>
      {contentList.map((elem) => (
        <ContentCard key={elem.contentId} {...elem} />
      ))}
    </div>
  );
}

export default ContentList;
