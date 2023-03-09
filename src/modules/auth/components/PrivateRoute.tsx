import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {}

const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
  children,
}) => {
  const auth = useAuth();

  if (!auth.isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
