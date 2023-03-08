import React from 'react';
import { ContentBody } from '../../types/common';

function ContentBody(props: ContentBody) {
  const { schemaId, schemaValue } = props;

  return (
    <article className='container' key={schemaId} data-schema-id={schemaId}>
      <section dangerouslySetInnerHTML={{ __html: schemaValue }}></section>
    </article>
  );
}

export default ContentBody;
