import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentItem(props: ContentMeta) {
  const { title, createdAt, contentId, description } = props;

  return (
    <Link href={`posts/${contentId}`}>
      <div className='cursor-pointer content-item'>
        <p>
          <b>{title}</b>
        </p>
        <span className='text-dark'>{parseDate(createdAt)}</span>
        <p className='description text-grey'>{description}</p>
      </div>
    </Link>
  );
}

export default ContentItem;
