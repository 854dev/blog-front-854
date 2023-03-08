import React from 'react';
import { ContentMeta } from '../../types/common';

function ContentMeta(props: ContentMeta) {
  const { title, createdAt, contentId } = props;

  return (
    <div>
      <h1>{title}</h1>
      <span className='text-light'>{createdAt}</span>
      <span className='text-light'>{contentId}</span>
    </div>
  );
}

export default ContentMeta;
