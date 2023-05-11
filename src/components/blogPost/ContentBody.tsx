import React from 'react';

interface Props {
  key: string;
  value: string | number;
}

function ContentBody(props: Props) {
  const { key, value } = props;

  return (
    <article className='container p-3' key={key}>
      <section dangerouslySetInnerHTML={{ __html: value.toString() }}></section>
    </article>
  );
}

export default ContentBody;
