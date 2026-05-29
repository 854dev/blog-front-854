import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';
function ContentCard(props: ContentMeta) {
  const { title, createdAt, contentId, contentTypeName } = props;
  const href = contentTypeName && contentId ? `/${contentTypeName}/${contentId}` : '#';

  return (
    <Link href={href} className='cursor-pointer card'>
      <h4>{title}</h4>
      <span>{createdAt ? parseDate(createdAt) : ''}</span>
      <p className='description'></p>
    </Link>
  );
}

export default ContentCard;
