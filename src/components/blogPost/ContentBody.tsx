import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface Props {
  key: string;
  value: string | number;
}

function ContentBody(props: Props) {
  const { key, value } = props;

  return (
    <article className='container'>
      <section>
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{value.toString()}</ReactMarkdown>
      </section>
    </article>
  );
}

export default ContentBody;
