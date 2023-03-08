import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Button from "../../../common/components/Button/Button";
import Container from "../../../common/components/Container/Container";
import ErrorsList from "../../../common/components/ErrorsList/ErrorsList";
import Input from "../../../common/components/Input/Input";
import MdEditorHookForm from "../../../common/components/MdEditorHookForm/MdEditorHookForm";
import { CreateArticleInDTO } from '../api/dto/createArticle.in';
import { EditArticleInDTO } from '../api/dto/editArticle.in';
import {
  useCreateArticleMutation,
  useEditArticleMutation,
  useGetSingleArticleQuery,
} from "../api/repository";

interface EditorFormValues {
  title: string;
  description: string;
  body: string;
  tags: string;
}

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  body: yup.string().required(),
  tags: yup.string(),
});

const EditorPage = () => {
  const navigate = useNavigate();
  const [triggerCreateArticle] = useCreateArticleMutation();
  const [triggerEditArticle] = useEditArticleMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EditorFormValues>({
    defaultValues: {
      title: "",
      description: "",
      body: "",
      tags: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const { slug } = useParams();
  const { data, isLoading } = useGetSingleArticleQuery(
    { slug: String(slug) },
    { skip: !Boolean(slug) }
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    reset({
      title: data.article.title,
      description: data.article.description,
      body: data.article.body,
      tags: data.article.tagList.join(", "),
    });
  }, [data]);

  const onSubmit = async (values: EditorFormValues) => {
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
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
        <ErrorsList errors={errors} />
        <Input {...register("title")} placeholder="Article Title" />
        <Input
          {...register("description")}
          placeholder="What`s this article about?"
          size="SM"
        />
        <MdEditorHookForm control={control} name="body" />
        <Input {...register("tags")} placeholder="Enter tags" size="SM" />
        <div className="flex justify-end">
          <Button
            btnStyle="GREEN"
            size="LG"
            type="submit"
            disabled={isSubmitting}
          >
            Publish article
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default EditorPage;
