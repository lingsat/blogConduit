import { useParams } from "react-router-dom";
import Container from "../../../common/components/Container/Container";
import { useGetSingleArticleQuery } from "../api/repository";
import ArticleAuthor from '../components/ArticleAuthor/ArticleAuthor';
import ArticleBunner from "../components/ArticleBunner/ArticleBunner";
import ArticleMeta from "../components/ArticleMeta/ArticleMeta";
import TagList from "../components/TagList/TagList";

const convertNewLines = (body: string) => {
  return body.split("\\n").join("<br />");
};

const ArticlePage = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleArticleQuery({
    slug: slug!,
  });

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <h2 className="text-center">Artile Not Found</h2>;
  }

  return (
    <>
      <ArticleBunner
        title={data.article.title}
        articleCreatedAt={data.article.createdAt}
        articleFavoritesCount={data.article.favoritesCount}
        author={data.article.author}
      />
      <Container>
        <div className="pb-8 border-b">
          <p
            className="text-xl mb-8"
            dangerouslySetInnerHTML={{
              __html: convertNewLines(data.article.body),
            }}
          />
          <TagList tagList={data.article.tagList} />
        </div>
        <div className="flex justify-center my-6">
          <ArticleMeta
            authorNameStyle="GREEN"
            author={data.article.author}
            articleCreatedAt={data.article.createdAt}
            articleFavoritesCount={data.article.favoritesCount}
          />
        </div>

        <div className='max-w-3xl mx-auto mt-16'>
          <div className='border border-commentBorder rounded-sm'>
            <div className='p-5'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur officiis facere est sapiente itaque accusantium
                saepe fugiat sequi, molestiae quia.
              </p>
            </div>
            <div className='border-t border-commentBorder bg-authorCommentBg px-5 py-3'>
              <ArticleAuthor author={data.article.author} publishedAt={new Date(data.article.createdAt)} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ArticlePage;
