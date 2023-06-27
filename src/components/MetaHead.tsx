import Head from 'next/head';
import { META_TAG_BASE, getMetaTagObj, getMetaTagObjKeys } from '../common/util';

interface Props {
  meta?: Partial<Record<getMetaTagObjKeys, string>>;
}

const MetaHead = (props: Props) => {
  const result = getMetaTagObj(props.meta);

  return (
    <Head>
      <title>
        {props.meta?.title ? `${props.meta?.title} - ${META_TAG_BASE.title}` : META_TAG_BASE.title}
      </title>
      {Object.entries(result).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
    </Head>
  );
};

export default MetaHead;
