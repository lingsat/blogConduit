import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from "yup";
import Button from "../../../common/components/Button/Button";
import Container from "../../../common/components/Container/Container";
import ErrorsList from '../../../common/components/ErrorsList/ErrorsList';
import Input from "../../../common/components/Input/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import { useAuth } from "../../auth/hooks/useAuth";
import { useUpdateUserMutation } from '../api/repository';

interface SettingsFormValues {
  avatar: string;
  username: string;
  bio: string;
  email: string;
  newPassword: string;
}

const validationSchema = yup.object({
  avatar: yup.string().url().required(),
  username: yup.string().min(3).required(),
  bio: yup.string(),
  email: yup.string().email().required(),
  newPassword: yup.string(),
});

const SettingsPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [triggerUpdateUser] = useUpdateUserMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormValues>({
    defaultValues: {
      avatar: auth.user?.image,
      username: auth.user?.username,
      bio: auth.user?.bio || '',
      email: auth.user?.email,
      newPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: SettingsFormValues) => {
    try {
      await triggerUpdateUser(values).unwrap();
      navigate(`/${encodeURIComponent(values.username)}`);
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
  };


  return (
    <Container>
      <h2 className="mb-4 text-center text-4xl">Your Settings</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ErrorsList errors={errors} />
        <Input
          placeholder="URL of profile picture"
          {...register("avatar")}
          size="SM"
        />
        <Input placeholder="Username" {...register("username")} />
        <TextArea
          placeholder="Short bio about you"
          {...register("bio")}
          rows={10}
        />
        <Input placeholder="Email" {...register("email")} type="email" />
        <Input placeholder="New password" {...register("newPassword")} type='password' />
        <div className="flex justify-end">
          <Button type="submit" btnStyle="GREEN" size="LG">
            Update Settings
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SettingsPage;
