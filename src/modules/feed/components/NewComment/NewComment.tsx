import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from "yup";
import Button from "../../../../common/components/Button/Button";
import TextArea from "../../../../common/components/TextArea/TextArea";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useCreateCommentMutation } from '../../api/repository';

interface NewCommentProps {
  slug: string;
}

interface NewCommentFormValues {
  comment: string;
}

const validationSchema = yup.object({
  comment: yup.string().required(),
});

const NewComment: FC<NewCommentProps> = ({ slug }) => {
  const auth = useAuth();
  const [triggerCreateComment] = useCreateCommentMutation();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      comment: "",
    },
    resolver: yupResolver(validationSchema),
  });

  if (!auth.isLoggedIn) {
    return (
      <p className='text-center'>
        <Link to="/sign-in">Sign in</Link> or <Link to="/sign-up">sign up</Link>{" "}
        to add comments on this article.
      </p>
    );
  }

  const onSubmit = async (values: NewCommentFormValues) => {
    try {
      await triggerCreateComment({
        articleSlug: slug,
        comment: values.comment,
      }).unwrap();
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-commentBorder rounded"
    >
      <TextArea
        noBorder={true}
        rows={4}
        size="SM"
        className='py-3 px-5'
        placeholder="Leave your comment"
        {...register("comment")}
      />
      <div className="border-t border-authorCommentBg bg-authorCommentBg py-3 px-5 flex justify-between item-center gap-2">
        <img
          src={auth.user?.image}
          alt={`${auth.user?.username} avatar`}
          className="w-8 h-8 rounded-full"
        />
        <Button type="submit" btnStyle="GREEN" disabled={isSubmitting}>
          Post comment
        </Button>
      </div>
    </form>
  );
};

export default NewComment;
