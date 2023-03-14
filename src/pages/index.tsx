import Hero from '../components/Hero';
import api from '../api/api';

export async function getStaticProps() {
  const res = await api.content.getList({
    page: 1,
    limit: 5,
    contentTypeId: 1,
  });

  return {
    props: { contentList: res.data.data }, // will be passed to the page component as props
  };
}

export default function Home({ contentList }) {
  return <Hero contentList={contentList} />;
}
