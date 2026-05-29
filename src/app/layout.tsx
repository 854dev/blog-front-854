import type { Metadata } from 'next';
import '../styles/index.css';
import MainLayout from '../layouts/MainLayout';
import { META_TAG_BASE } from '../common/util';
import { getContentTypeList } from '../api/content';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL(META_TAG_BASE['og:url']),
  title: {
    default: META_TAG_BASE.title,
    template: `%s - ${META_TAG_BASE.title}`,
  },
  description: META_TAG_BASE.description,
  openGraph: {
    type: 'website',
    url: META_TAG_BASE['og:url'],
    title: META_TAG_BASE['og:title'],
    description: META_TAG_BASE['og:description'],
    images: [META_TAG_BASE['og:image']],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TAG_BASE['twitter:title'],
    description: META_TAG_BASE['twitter:description'],
    images: [META_TAG_BASE['twitter:image']],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const contentTypeList = await getContentTypeList();

  return (
    <html lang='ko'>
      <body>
        <MainLayout contentTypeList={contentTypeList}>{children}</MainLayout>
      </body>
    </html>
  );
}
