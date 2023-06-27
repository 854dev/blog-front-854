import React from 'react';
import { parseDate } from '../../common/util';
import { ContentMeta } from '../../types/common';

function ContentMeta(props: ContentMeta) {
  const { title, createdAt, contentId, description, tags } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span className='text-grey'>{parseDate(createdAt, 'yyyy.MM.dd hh:mm')}</span>
      <div className='py-1 tag-list'>
        {tags.map((elem) => (
          <span className='tag' key={elem.name}>
            {elem.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ContentMeta;
