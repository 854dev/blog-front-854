import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentItem(props: ContentMeta) {
  const { title, createdAt, contentId } = props;

  return (
    <Link href={`posts/${contentId}`}>
      <div className='cursor-pointer'>
        <h4>
          <b>{title}</b>
        </h4>
        <span className='text-color-grey'>{parseDate(createdAt)}</span>
        <p className='description'></p>
      </div>
    </Link>
  );
}

export default ContentItem;
