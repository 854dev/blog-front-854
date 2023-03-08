import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';
function ContentCard(props: ContentMeta) {
  const { title, createdAt } = props;

  return (
    <div className='card'>
      <header className='justify-between is-vertical-align'>
        <h4>{title}</h4>
        <span className='text-light'>{parseDate(createdAt)}</span>
        <div className='tag is-small'>Submit</div>
      </header>
      <p className='description'>A nisi ullam ... cupiditate?</p>
      <footer className='is-right'>
        <a className='button'>Cancel</a>
      </footer>
    </div>
  );
}

export default ContentCard;
