import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentItem(props: ContentMeta) {
  const { title, createdAt, contentId, description, tags } = props;

  return (
    <Link href={`posts/${contentId}`}>
      <div className='cursor-pointer content-item'>
        <p className='title'>
          <b>{title}</b>
        </p>
        <span className='text-dark'>{parseDate(createdAt)}</span>
        <p className='description text-grey'>{description}</p>
        <div className='tag-list'>
          {tags.map((elem) => (
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
