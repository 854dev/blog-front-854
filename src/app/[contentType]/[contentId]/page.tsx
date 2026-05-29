import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getContentDetail } from '../../../api/content';
import ContentBody from '../../../components/blogPost/ContentBody';
import ContentMeta from '../../../components/blogPost/ContentMeta';
import Card from '../../../components/card/Card';
import PostMotion from './PostMotion';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ contentId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { contentId } = await params;
  const contentDetail = await getContentDetail(contentId);

  return {
    title: contentDetail?.title,
    description: contentDetail?.description,
  };
}

export default async function Post({ params }: Props) {
  const { contentId } = await params;
  const contentDetail = await getContentDetail(contentId);
  if (!contentDetail) {
    notFound();
  }

  const body = contentDetail.body ?? {};

  return (
    <PostMotion>
      <Card>
        <div className='p-2'>
          <ContentMeta {...contentDetail} />
        </div>
      </Card>

      <div className='py-2'>
        <hr />
      </div>

      {Object.entries(body).map(([key, value]) => {
        return (
          <React.Fragment key={key}>
            <ContentBody value={value} />
          </React.Fragment>
        );
      })}
    </PostMotion>
  );
}
