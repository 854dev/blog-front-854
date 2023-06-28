import { DateTime } from 'luxon';
import { DATE_FORMAT } from './constant';
import metaImage from 'public/meta-image.png';

export const toggleDarkMode = () => {
  const isContainDark = document.body.classList.contains('dark');

  if (isContainDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
  return isContainDark;
};

export const parseDate = (dateString: string, format?: string) => {
  return DateTime.fromISO(dateString).toFormat(format ?? DATE_FORMAT);
};

/** 메타태그 작성시 기본 데이터 */
export const META_TAG_BASE = {
  title: '854 Blog',
  description: '854의 블로그입니다. 코딩과 게임 관련 글을 올리고 있어요.',
  'og:type': 'website',
  'og:url': 'https://studio854.blog',
  'og:title': '854 Blog',
  'og:description': '854의 블로그입니다. 개발과 게임 관련 글을 올리고 있어요.',
  'og:image': '/meta-image.png',
  'twitter:card': '/meta-image.png',
  'twitter:url': 'https://studio854.blog',
  'twitter:title': '854 Blog',
  'twitter:description': '854의 블로그입니다. 개발과 게임 관련 글을 올리고 있어요.',
  'twitter:image': '/meta-image.png',
};

/** 동적으로 바꿀수 있는 메타태그 키값  */
export type getMetaTagObjKeys = 'title' | 'url' | 'description' | 'image';
/** META_TAG_DEFAULT에서 변경 값이 있는 경우 변환  */
export const getMetaTagObj = (arg: Partial<Record<getMetaTagObjKeys, string>>) => {
  /** 메타태그 값 생성 */
  const result = { ...META_TAG_BASE };

  if (!arg) {
    return result;
  }

  /** 주어진 인자에 맞게 메타태그 키값 추가 */
  if ('title' in arg) {
    result['title'] = arg.title;
    result['og:title'] = arg.title;
    result['twitter:title'] = arg.title;
  }

  if ('url' in arg) {
    result['og:url'] = arg.url;
    result['twitter:url'] = arg.url;
  }

  if ('description' in arg) {
    result['description'] = arg.description;
    result['og:description'] = arg.description;
    result['twitter:description'] = arg.description;
  }

  if ('image' in arg) {
    result['og:image'] = arg.image;
    result['twitter:image'] = arg.image;
    result['twitter:card'] = arg.image;
  }

  return result;
};

