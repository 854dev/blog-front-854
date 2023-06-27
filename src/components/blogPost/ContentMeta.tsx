import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentMeta(props: ContentMeta) {
  const { title, createdAt, contentId, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span className='text-grey'>{parseDate(createdAt, 'yyyy.MM.dd hh:mm')}</span>
    </div>
  );
}

export default ContentMeta;
