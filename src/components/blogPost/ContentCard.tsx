import Link from 'next/link';
import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';
function ContentCard(props: ContentMeta) {
  const { title, createdAt, contentId } = props;

  return (
    <Link href={`posts/${contentId}`}>
      <div className='card'>
        <header className='justify-between is-vertical-align'>
          <h4>{title}</h4>
          <span className='text-light'>{parseDate(createdAt)}</span>
          <div className='tag is-small'>Submit</div>
        </header>
        <p className='description'>설명</p>
        <footer className='is-right'>
          <a className='button'>read</a>
        </footer>
      </div>
    </Link>
  );
}

export default ContentCard;
