import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentItem(props: ContentMeta) {
  const { title, createdAt, contentId, contentTypeName, description, tags } = props;
  const href = contentTypeName && contentId ? `/${contentTypeName}/${contentId}` : '#';

  return (
    <Link href={href}>
      <div className='cursor-pointer content-item'>
        <p className='title'>
          <b>{title}</b>
        </p>
        <span className='text-dark'>{createdAt ? parseDate(createdAt) : ''}</span>
        <p className='description text-grey'>{description}</p>
        <div className='tag-list'>
          {(tags ?? []).map((elem) => (
            <span className='tag' key={elem.name}>
              {elem.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ContentItem;
