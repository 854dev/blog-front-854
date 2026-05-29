import type { Metadata } from 'next';
import { getContentList } from '../../api/content';
import ContentTypeClient from './ContentTypeClient';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ contentType: string }>;
  searchParams?: Promise<{ page?: string; limit?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { contentType } = await params;

  return {
    title: contentType,
  };
}

export default async function ContentTypePage({ params, searchParams }: Props) {
  const { contentType } = await params;
  const query = await searchParams;
  const page = Number(query?.page ?? 1);

  const { contentList, totalPage } = await getContentList({
    page,
    limit: Number(query?.limit ?? 12),
    contentTypeName: contentType,
  });

  return (
    <ContentTypeClient
      contentType={contentType}
      contentList={contentList}
      page={page}
      totalPage={totalPage}
    />
  );
}
