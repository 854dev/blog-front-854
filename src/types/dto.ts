import { bodyFieldType, ContentBody, ContentMeta, ID } from './common';

export interface PagedRequest {
  page: number;
  limit: number;
}