import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import Container from "../../../common/components/Container/Container";
import Input from "../../../common/components/Input/Input";
import Button from "../../../common/components/Button/Button";
import { useAuth } from '../hooks/useAuth';
import ErrorsList from '../../../common/components/ErrorsList/ErrorsList';

interface SignInProps {}

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignIn: FC<SignInProps> = () => {  
  const { signIn } = useAuth();
  const { register, handleSubmit, formState } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });  
  const navigate = useNavigate();  

  const onSubmit = async (values: SignInFormValues) => {
    try {
      await signIn(values);
      navigate('/');
    } catch (e) {      
      toast.error('Something went wrong. Please, try again later');
    }
  };

  return (
    <Container>
      <h2 className="text-center text-5xl mb-4">Sign In</h2>
      <p className="text-center mb-4">
        <Link to="/sing-in">Need an account?</Link>
      </p>
      <form
        className="max-w-xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <ErrorsList errors={formState.errors} />
        <div className='flex flex-col gap-4'>
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
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
