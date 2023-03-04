import { GlobalFeedIn } from './dto/globalFeed.in'

export const transformResponse = (response: GlobalFeedIn) => {
  return {
    articles: response.articles || [],
    articlesCount: response.articlesCount || 0,
  }
}