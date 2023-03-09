import { Author } from './globalFeed.in';

export interface ArticleCommentsIn {
  comments: Comment[];
}

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
}