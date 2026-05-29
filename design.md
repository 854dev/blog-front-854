# 854 Blog Design System

## 목적

현재 블로그의 단색 미니멀 컨셉을 유지하면서, 개발자 외주 수주에 적합한 신뢰형 포트폴리오 블로그로 확장한다.

핵심 목표는 다음과 같다.

- 글을 읽는 블로그 경험은 유지한다.
- 방문자가 "이 개발자에게 일을 맡길 수 있겠다"는 판단을 빠르게 하도록 한다.
- 화려한 브랜딩보다 명확한 정보 구조, 기술 신뢰, 작업 방식, 문의 전환을 우선한다.
- 현재의 흑백 테두리, 회색 배경, 단일 강조색, 카드형 레이아웃을 유지한다.

## 현재 상황

### 기술 구조

- Next.js App Router 기반 프로젝트다.
- 전역 스타일은 `src/styles/index.css`에서 `chota`를 import한 뒤 `src/styles/custom.css`로 덮어쓴다.
- 실제 디자인 토큰은 대부분 `custom.css`의 CSS 변수로 관리된다.
- 주요 UI는 `Navbar`, `PageIntro`, `Card`, `ContentItem`, `ContentMeta`, `ContentBody`, `Pagination`으로 구성된다.
- 애니메이션은 `framer-motion`의 짧은 fade-in 위주다.

### 현재 시각 언어

- 배경은 밝은 회색, 본문은 검정/짙은 회색 중심이다.
- 카드는 둥근 테두리, 검정 테두리, 두꺼운 offset shadow를 사용한다.
- 로고는 `854` 텍스트를 작은 배지처럼 보여준다.
- 강조색은 현재 light mode에서 `--sea-green`을 primary로 사용한다.
- dark mode는 `body.dark` 클래스 기반으로 색상 변수만 바꾼다.

### 유지할 것

- 단색 중심의 미니멀한 인상
- 선명한 테두리와 카드 shadow
- 작은 로고 배지
- 빠른 fade-in 모션
- 콘텐츠 타입별 리스트와 상세 페이지 구조
- 한국어 중심의 블로그 톤

### 개선할 것

- "개발과 게임 관련 글" 중심의 블로그 소개를 외주 수주용 메시지로 조정한다.
- 홈 첫 화면에 역량, 서비스 범위, 대표 작업, 문의 유도를 추가한다.
- 카드 내부 정보 밀도를 높이고 긴 설명이 과도하게 잘리지 않게 한다.
- 글 목록과 포트폴리오/케이스 스터디 목록의 목적을 구분한다.
- Tailwind 설정은 현재 `src/app`을 content 경로에 포함하지 않으므로, Tailwind를 계속 쓸 계획이면 설정을 정리한다.

## 브랜드 방향

### 키워드

- 단정한
- 기술적인
- 빠른
- 현실적인
- 유지보수 가능한
- 문제 해결 중심

### 피해야 할 인상

- 에이전시처럼 과하게 장식적인 디자인
- 개발자 개인 블로그처럼 목적이 흐린 첫 화면
- 너무 많은 컬러와 이모지
- 추상적인 자기소개만 있고 증거가 없는 구성
- 카드, 버튼, 태그가 모두 같은 중요도로 보이는 구성

## 정보 구조

외주 수주용 블로그는 다음 질문에 빠르게 답해야 한다.

1. 어떤 문제를 해결할 수 있는가?
2. 어떤 기술 스택과 방식으로 일하는가?
3. 이전에 어떤 종류의 작업을 했는가?
4. 글을 보면 실력이 검증되는가?
5. 어떻게 문의하면 되는가?

권장 내비게이션은 다음과 같다.

- `Home`: 소개, 핵심 역량, 최근 글, 문의 CTA
- `Post`: 기술 글
- `Devlog`: 작업 기록 또는 개발 로그
- `Case`: 프로젝트 사례, 외주 작업 샘플
- `About`: 작업 방식, 기술 스택, 연락처

현재 API mock에는 `Post`, `Devlog`만 있으므로, 디자인 단계에서는 `Case`, `About`을 확장 후보로 둔다.

## 홈 구성

### Hero

홈 첫 화면은 블로그 제목보다 외주 의뢰자가 이해할 수 있는 가치 제안을 우선한다.

권장 문구:

- 제목: `웹 서비스를 빠르게 만들고, 오래 유지되게 정리합니다.`
- 보조 문구: `Next.js, React, API 연동, 관리자 도구, 블로그/콘텐츠 시스템을 중심으로 기획과 구현 사이의 빈틈을 줄입니다.`
- CTA 1: `작업 문의`
- CTA 2: `최근 글 보기`

현재 `PageIntro`는 중앙 정렬 제목만 제공하므로, 홈 전용 hero 컴포넌트를 추가하는 것이 좋다.

### Trust Strip

Hero 아래에 짧은 신뢰 지표를 3개 배치한다.

- `Frontend`: Next.js, React, TypeScript
- `Backend/API`: REST API 연동, 인증 흐름, 데이터 모델링 협업
- `Delivery`: 요구사항 정리, 배포, 문서화, 유지보수

### Services

서비스 카드는 3개 이하로 유지한다.

- `서비스 MVP 개발`: 랜딩, 블로그, 관리자, 예약/문의 폼
- `프론트엔드 리팩터링`: App Router 전환, 상태/컴포넌트 정리, 성능 개선
- `콘텐츠 시스템 구축`: 글 목록, 상세, 태그, SEO, 메타데이터

### Recent Posts

최근 글은 현재 구조를 유지하되, 제목만 `Recent Post`보다 구체적으로 바꾼다.

권장 제목:

- `최근 기술 기록`
- `문제를 해결한 기록`
- `개발 노트`

### Contact CTA

페이지 하단에는 단순한 문의 카드를 둔다.

권장 문구:

- 제목: `만들고 싶은 기능이 있다면 요구사항부터 정리해드립니다.`
- 본문: `작은 기능 개선, 신규 페이지, 기존 프로젝트 정리 모두 가능합니다.`
- 버튼: `문의하기`

## 컬러 시스템

현재 색상은 유지하되 의미 기반 토큰을 추가해 사용처를 명확히 한다.

### Base Tokens

```css
:root {
  --mono-0: #ffffff;
  --mono-50: #f5f5f5;
  --mono-100: #e6e6e6;
  --mono-300: #c6c6c6;
  --mono-500: #848c93;
  --mono-700: #333333;
  --mono-900: #000000;

  --accent: #208854;
  --accent-warm: #ffc72b;
  --danger: #ea4f4f;
}
```

### Semantic Tokens

```css
body {
  --surface-page: var(--mono-100);
  --surface-card: var(--mono-50);
  --surface-raised: var(--mono-0);
  --text-primary: var(--mono-900);
  --text-secondary: var(--mono-700);
  --text-muted: var(--mono-500);
  --border-strong: var(--mono-900);
  --border-muted: var(--mono-300);
  --shadow-hard: var(--mono-700);
  --action-primary: var(--accent);
}

body.dark {
  --surface-page: #1b242c;
  --surface-card: #333333;
  --surface-raised: #262626;
  --text-primary: #f5f5f5;
  --text-secondary: #e6e6e6;
  --text-muted: #c6c6c6;
  --border-strong: #c6c6c6;
  --border-muted: #848c93;
  --shadow-hard: #111111;
  --action-primary: #ffc72b;
}
```

### 사용 원칙

- 기본 화면은 흑백과 회색으로 구성한다.
- 강조색은 CTA, 활성 페이지, 핵심 태그, 링크 hover에만 사용한다.
- 한 화면에서 강조색 면적은 10% 이하로 제한한다.
- 외주 수주용 신뢰감을 위해 원색 배경 섹션은 사용하지 않는다.

## 타이포그래피

현재 `Noto Sans KR`를 사용한다. 미니멀한 컨셉에는 적합하지만, 브랜드 인상을 더 선명하게 하려면 제목과 본문을 분리한다.

권장 조합:

- 제목: `Noto Sans KR`, `Pretendard`, 또는 `IBM Plex Sans KR`
- 본문: `Noto Sans KR` 또는 `Pretendard`
- 코드: `JetBrains Mono`, `Consolas`, monospace

크기 체계:

- Hero title: `clamp(2.4rem, 6vw, 5.6rem)`
- Page title: `clamp(2rem, 4vw, 4rem)`
- Section title: `2.4rem`
- Card title: `1.8rem`
- Body: `1.6rem`
- Meta: `1.3rem`

원칙:

- 제목은 짧고 구체적으로 쓴다.
- 본문 줄 길이는 65자 안팎을 유지한다.
- 카드 설명은 2줄까지 허용하고, 태그와 날짜보다 제목을 우선한다.
- 영문 섹션명만 단독으로 쓰지 말고 한국어 설명을 같이 제공한다.

## 레이아웃

### Container

현재 `.main-wrap`은 `max-width: 900px`이다. 글 읽기에는 적당하지만 홈에서 서비스/케이스 카드를 보여주기에는 약간 좁다.

권장:

- 기본 컨테이너: `max-width: 960px`
- 글 상세 본문: `max-width: 760px`
- 홈 hero/서비스: `max-width: 1040px`

### Grid

- 모바일: 1열
- 태블릿: 2열
- 데스크톱: 3열

현재 `ContentTypeClient`는 `col-4`만 사용하므로 모바일에서 깨질 가능성이 있다. 홈처럼 `col-4-lg col-6-md col-12` 패턴을 통일한다.

### Spacing

현재 `--spacing-1`부터 `--spacing-4`까지 1rem 단위다. 유지하되 의미 기준을 추가한다.

- Section gap: `6rem`
- Card padding: `2rem`
- Compact card padding: `1.6rem`
- Inline gap: `0.8rem`
- Nav height: 콘텐츠 기준 최소 `5.6rem`

## 컴포넌트 규칙

### Navbar

목표는 탐색보다 신뢰와 문의 전환이다.

권장 구성:

- 왼쪽: `854` 로고
- 중앙 또는 왼쪽 이어서: `Post`, `Devlog`, `Case`, `About`
- 오른쪽: `Contact` CTA, dark mode toggle

규칙:

- 현재 페이지는 밑줄 또는 filled pill로 표시한다.
- `Light/Dark` 텍스트 버튼은 너무 기능적으로 보이므로 `Theme` 또는 작은 토글 형태로 변경한다.
- 모바일에서는 메뉴가 줄바꿈되어도 로고와 CTA가 먼저 보여야 한다.

### Logo

현재 배지형 로고는 유지한다.

개선 방향:

- 테두리 두께는 `2px` 유지
- 배경은 light에서 흰색, dark에서 짙은 회색
- hover 시 shadow를 아주 작게 추가
- 로고 옆에 긴 브랜드명을 붙이지 않는다.

### Card

카드는 현재 디자인의 핵심이다.

규칙:

- 기본 border: `1px solid var(--border-strong)`
- radius: `1.2rem`에서 `1.5rem`
- shadow: `0.5rem 0.5rem var(--shadow-hard)`
- hover: 밝기 변경보다 `translate(-2px, -2px)`와 shadow 증가를 사용한다.
- active: 현재처럼 눌리는 효과를 유지한다.

카드 유형:

- `PostCard`: 제목, 날짜, 설명, 태그
- `ServiceCard`: 서비스명, 해결 문제, 산출물
- `CaseCard`: 문제, 역할, 결과
- `ContactCard`: 문의 CTA

### Tags

태그는 기술 스택과 글 분류를 빠르게 보여주는 요소다.

규칙:

- 기본은 회색 pill
- 핵심 기술 태그 1개만 강조색 outline 허용
- 태그 텍스트는 소문자 또는 짧은 한글로 통일
- 한 카드에서 4개 초과 시 숨기거나 `+n`으로 축약

### Buttons

CTA 버튼은 현재 chota `.button`을 확장한다.

유형:

- Primary: 검정 배경 또는 강조색 배경
- Secondary: 흰 배경, 검정 테두리
- Ghost: 텍스트 버튼

외주 문의 CTA는 항상 Primary를 사용한다.

### PageIntro

현재 `PageIntro`는 단순 제목용으로 유지한다.

개선 방향:

- 목록 페이지: 제목 + 한 줄 설명
- 상세 페이지: `ContentMeta`가 담당
- 홈: 별도 `HomeHero` 사용

## 콘텐츠 작성 규칙

외주 수주용 블로그에서는 글도 포트폴리오 역할을 한다.

### 기술 글

권장 구조:

1. 문제 상황
2. 선택한 접근
3. 구현 요약
4. 트레이드오프
5. 결과와 다음 개선점

제목 예시:

- `Next.js App Router 전환 중 API 경계를 정리한 방식`
- `pnpm 전환 후 Docker 빌드 흐름을 단순화한 기록`
- `블로그 상세 페이지 SEO 메타데이터 적용 노트`

### 케이스 스터디

권장 구조:

1. 클라이언트 문제
2. 맡은 범위
3. 사용 기술
4. 구현 결과
5. 배운 점 또는 유지보수 포인트

민감한 외주 정보는 익명화한다.

## 모션

현재 모션은 짧은 fade-in 위주라 컨셉에 맞다.

규칙:

- 페이지 진입: `opacity 0 -> 1`, `y 8px -> 0`
- 카드 리스트: 0.05초 간격 stagger
- 버튼 hover: 120ms 이하
- 긴 스크롤 애니메이션, 과한 bounce, parallax는 사용하지 않는다.

모션은 장식이 아니라 정보가 등장하는 순서를 만드는 용도로만 사용한다.

## 반응형 기준

### Mobile

- Hero 문구는 2~3줄 안에서 끝난다.
- 카드 목록은 1열로 둔다.
- CTA는 full width 버튼을 허용한다.
- Navbar가 두 줄이 되더라도 로고와 주요 CTA가 먼저 보여야 한다.

### Tablet

- 서비스/글 카드는 2열이다.
- Hero 아래 trust strip은 3개 항목을 한 줄 또는 2열로 배치한다.

### Desktop

- 서비스/글 카드는 3열이다.
- 본문 상세는 너무 넓히지 않는다.
- 홈 섹션 사이 여백을 충분히 둔다.

## 접근성

- 버튼과 링크는 keyboard focus 스타일을 명확히 둔다.
- `Light/Dark` 토글은 현재 `aria-label`이 있으므로 유지한다.
- 색상만으로 활성 상태를 표현하지 않는다.
- 카드 전체가 링크일 때 내부에 중복 링크를 넣지 않는다.
- 본문 markdown의 heading 계층은 `h1 -> h2 -> h3` 순서를 유지한다.

## SEO와 메타 메시지

현재 기본 메타 설명은 개인 블로그 톤이다.

권장 기본 설명:

`Next.js, React, TypeScript 기반 웹 서비스 개발과 리팩터링을 기록하는 854의 개발 블로그입니다.`

외주 수주 목적을 더 명확히 할 경우:

`Next.js와 React 기반 웹 서비스, 콘텐츠 시스템, 프론트엔드 리팩터링을 다루는 개발자 854의 블로그입니다.`

Open Graph 이미지는 현재 `/meta-image.png`를 사용한다. 추후에는 다음 요소를 포함한 단색 메타 이미지를 권장한다.

- `854`
- `Frontend / Content System / Refactoring`
- 흰 배경, 검정 테두리, 작은 초록 accent

## 구현 우선순위

1. `custom.css`의 기존 색상 변수를 의미 토큰으로 정리한다.
2. 홈에 `HomeHero`, `ServiceCard`, `ContactCard`를 추가한다.
3. `Navbar`에 `Contact` CTA와 현재 페이지 활성 스타일을 추가한다.
4. 카드 hover/active 상태를 정리하고 모바일 그리드 클래스를 통일한다.
5. 메타 설명과 홈 카피를 외주 수주용으로 수정한다.
6. `Case` 콘텐츠 타입을 추가하거나, API 연동 전까지 mock 데이터로 구조를 검증한다.

## 디자인 원칙 요약

- 단색 미니멀을 유지한다.
- 강조색은 적게, 목적 있게 쓴다.
- 첫 화면은 자기소개보다 해결 가능한 문제를 말한다.
- 글 목록은 실력 증거, 케이스 스터디는 신뢰 증거로 분리한다.
- 카드는 현재 브랜드의 핵심이므로 더 정교하게 다듬고 유지한다.
- 모든 변경은 문의 전환과 읽기 경험을 동시에 개선해야 한다.
