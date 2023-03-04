import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import Container from "../../../common/components/Container/Container";
import Input from "../../../common/components/Input/Input";
import Button from "../../../common/components/Button/Button";
import { useLazySignUpQuery } from "../api/repository";
import { setUser } from '../slice';
import { useAppDispatch } from '../../../store/store';

interface SignUpProps {}

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignUp: FC<SignUpProps> = () => {
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const [triggerSignUpQuery] = useLazySignUpQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      const { data } = await triggerSignUpQuery(values, false);      
      dispatch(setUser(data!.user));
      navigate('/');
    } catch (e) {      
      toast.error('Something went wrong. Please, try again later');
    }
  };

  return (
    <Container>
      <h2 className="text-center text-5xl mb-4">Sign Up</h2>
      <p className="text-center mb-4">
        <Link to="/sing-in">Have an account?</Link>
      </p>
      <form
        className="max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <ul className="list-disc pl-10 mb-4">
          {(
            Object.keys(formState.errors) as (keyof typeof formState.errors)[]
          ).map((field) => (
            <li key={`error-${field}`} className="text-redError font-bold">
              {formState.errors[field]!.message}
            </li>
          ))}
        </ul>
        <Input placeholder="Username" {...register("username")} />
        <Input placeholder="Email" type="email" {...register("email")} />
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <div className="flex justify-end">
          <Button
            btnStyle="GREEN"
            size="LG"
            type="submit"
            disabled={formState.isSubmitting}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
