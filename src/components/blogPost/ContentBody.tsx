import React from 'react';
import { ContentBody } from '../../types/common';

function ContentBody(props: ContentBody) {
  const { schemaId, schemaValue } = props;

  return (
    <article className='container p-3' key={schemaId} data-schema-id={schemaId}>
      <section dangerouslySetInnerHTML={{ __html: schemaValue }}></section>
    </article>
  );
}

export default ContentBody;
