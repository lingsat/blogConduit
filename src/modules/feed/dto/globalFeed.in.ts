export interface GlobalFeedIn {
  articles: ArticleIn[];
  articlesCount: number;
}

export interface ArticleIn {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface Author {
  username: string;
  bio?: any;
  image: string;
  following: boolean;
}