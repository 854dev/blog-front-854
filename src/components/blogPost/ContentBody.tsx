import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface Props {
  value: string | number;
}

function ContentBody(props: Props) {
  const { value } = props;

  return (
    <article className='container'>
      <section>
        <ReactMarkdown rehypePlugins={[rehypeSlug]}>{value.toString()}</ReactMarkdown>
      </section>
    </article>
  );
}

export default ContentBody;
