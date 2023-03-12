import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentMeta(props: ContentMeta) {
  const { title, createdAt, contentId } = props;

  return (
    <div className='px-3'>
      <h1>{title}</h1>
      <span>{parseDate(createdAt, 'yyyy.MM.dd hh:mm')}</span>
    </div>
  );
}

export default ContentMeta;
