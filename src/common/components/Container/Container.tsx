import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto px-2">{children}</div>;
};

export default Container;
