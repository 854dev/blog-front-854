import React from 'react';
import { ContentBody } from '../../types/common';

function ContentBody(props: ContentBody) {
  const { schemaId, schemaValue } = props;

  return <div data-schema-id={schemaId}>{schemaValue}</div>;
}

export default ContentBody;
