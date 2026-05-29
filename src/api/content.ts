import { ContentDetail, ContentMeta, ContentType } from '../types/common';

const MOCK_CONTENT_TYPES: ContentType[] = [
  {
    contentTypeId: 1,
    contentTypeName: 'Post',
    contentBodySchema: [
      { schemaId: 1, contentTypeId: 1, schemaType: 'text', schemaName: 'overview' },
      { schemaId: 2, contentTypeId: 1, schemaType: 'text', schemaName: 'details' },
    ],
  },
  {
    contentTypeId: 2,
    contentTypeName: 'Devlog',
    contentBodySchema: [{ schemaId: 3, contentTypeId: 2, schemaType: 'text', schemaName: 'entry' }],
  },
];

const MOCK_CONTENT_DETAILS: ContentDetail[] = [
  {
    contentId: 101,
    contentTypeId: 1,
    contentTypeName: 'Post',
    title: 'Next.js App Router Migration Notes',
    description: 'Pages Router에서 App Router로 전환하면서 정리한 핵심 포인트',
    creator: '854',
    createdAt: '2026-05-20T09:00:00.000Z',
    updatedAt: '2026-05-20T09:00:00.000Z',
    status: 'publish',
    tags: [{ name: 'nextjs' }, { name: 'approuter' }],
    body: {
      overview: '## 목표\nPages Router를 제거하고 App Router 기반으로 통일합니다.',
      details:
        '### 체크리스트\n- layout 통합\n- dynamic route 마이그레이션\n- metadata API 적용\n- 페이지별 데이터 패칭 단순화',
    },
  },
  {
    contentId: 102,
    contentTypeId: 1,
    contentTypeName: 'Post',
    title: 'PNPM Only Workspace Setup',
    description: 'yarn 제거 후 pnpm 전용으로 정리한 설정',
    creator: '854',
    createdAt: '2026-05-22T04:30:00.000Z',
    updatedAt: '2026-05-22T04:30:00.000Z',
    status: 'publish',
    tags: [{ name: 'pnpm' }, { name: 'tooling' }],
    body: {
      overview: '## 변경 사항\nlockfile을 `pnpm-lock.yaml`로 단일화했습니다.',
      details: 'Dockerfile, README, packageManager 필드를 pnpm 기준으로 통일했습니다.',
    },
  },
  {
    contentId: 201,
    contentTypeId: 2,
    contentTypeName: 'Devlog',
    title: 'Refactor Day 1',
    description: 'UI 컴포넌트 경계 정리와 에러 핸들링 보강',
    creator: '854',
    createdAt: '2026-05-25T12:10:00.000Z',
    updatedAt: '2026-05-25T12:10:00.000Z',
    status: 'publish',
    tags: [{ name: 'devlog' }, { name: 'refactor' }],
    body: {
      entry:
        '클라이언트 컴포넌트와 서버 컴포넌트 경계를 명확히 분리했고, 데이터 오류 시 fallback 경로를 추가했습니다.',
    },
  },
];

function toMeta(detail: ContentDetail): ContentMeta {
  const { body, ...meta } = detail;
  return meta;
}

export async function getContentTypeList() {
  return MOCK_CONTENT_TYPES;
}

export async function getContentList(req: {
  page: number | string;
  limit: number | string;
  contentTypeName: string;
}) {
  const page = Number(req.page) || 1;
  const limit = Number(req.limit) || 10;
  const typeName = req.contentTypeName;

  const filtered = MOCK_CONTENT_DETAILS.filter((item) => item.contentTypeName === typeName);
  const start = (page - 1) * limit;
  const contentList = filtered.slice(start, start + limit).map(toMeta);
  const totalPage = Math.max(1, Math.ceil(filtered.length / limit));

  return { contentList, totalPage };
}

export async function getContentDetail(contentId: string) {
  const id = Number(contentId);
  return MOCK_CONTENT_DETAILS.find((item) => item.contentId === id) ?? null;
}
