import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';
function ContentCard(props: ContentMeta) {
  const { title, createdAt, contentId } = props;

  const router = useRouter();
  return (
    <div className='cursor-pointer card' onClick={() => router.push(`posts/${contentId}`)}>
      <h4>{title}</h4>
      <span>{parseDate(createdAt)}</span>
      <p className='description'></p>
      <Link href={`posts/${contentId}`}></Link>
    </div>
  );
}

export default ContentCard;
