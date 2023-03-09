import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { PostFormValues } from "../types";
import { CreateArticleInDTO } from "../api/dto/createArticle.in";
import { EditArticleInDTO } from "../api/dto/editArticle.in";
import {
  useCreateArticleMutation,
  useEditArticleMutation,
  useGetSingleArticleQuery,
} from "../api/repository";
import PostForm from "../components/PostForm/PostForm";
import Container from "../../../common/components/Container/Container";

const EditorPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [triggerCreateArticle] = useCreateArticleMutation();
  const [triggerEditArticle] = useEditArticleMutation();
  const { data, isLoading } = useGetSingleArticleQuery(
    { slug: String(slug) },
    { skip: !Boolean(slug) }
  );

  const onSubmit = async (values: PostFormValues) => {
    try {
      let data: CreateArticleInDTO | EditArticleInDTO;
      if (slug) {
        data = await triggerEditArticle({ ...values, slug }).unwrap();
      } else {
        data = await triggerCreateArticle(values).unwrap();
      }
      navigate(`/article/${data.article.slug}`);
    } catch (e) {
      toast.error("Something wen`t wrong. Please, try again later");
    }
  };

  if (slug && isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <PostForm onSubmit={onSubmit} data={data} />
    </Container>
  );
};

export default EditorPage;
