import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingleArticleIn } from "../../api/dto/singleArticle.in";
import ErrorsList from "../../../../common/components/ErrorsList/ErrorsList";
import Button from "../../../../common/components/Button/Button";
import Input from "../../../../common/components/Input/Input";
import MdEditorHookForm from "../../../../common/components/MdEditorHookForm/MdEditorHookForm";
import { PostFormValues } from "../../types";

const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  body: yup.string().required(),
  tags: yup.string(),
});

interface PostFormProps {
  onSubmit: (values: PostFormValues) => Promise<void>;
  data?: SingleArticleIn;
}

const PostForm: FC<PostFormProps> = ({ data, onSubmit }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<PostFormValues>({
    defaultValues: {
      title: "",
      description: "",
      body: "",
      tags: "",
    },
    resolver: yupResolver(validationSchema),
  });

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

  return (
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
  );
};

export default PostForm;
