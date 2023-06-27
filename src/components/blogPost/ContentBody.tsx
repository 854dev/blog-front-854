import React from 'react';
import Markdown from 'react-markdown';

interface Props {
  key: string;
  value: string | number;
}

function ContentBody(props: Props) {
  const { key, value } = props;

  return (
    <article className='container' key={key}>
      <section>
        <Markdown children={value.toString()}></Markdown>
      </section>
    </article>
  );
}

export default ContentBody;
