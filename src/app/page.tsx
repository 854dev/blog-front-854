import { getContentList } from '../api/content';
import HomeClient from './HomeClient';

export const dynamic = 'force-dynamic';

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; limit?: string; contentType?: string }>;
}) {
  const params = await searchParams;
  const { contentList } = await getContentList({
    page: params?.page ?? 1,
    limit: params?.limit ?? 6,
    contentTypeName: params?.contentType ?? 'Post',
  });

  return <HomeClient contentList={contentList} />;
}
