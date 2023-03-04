import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
  GREEN = 'GREEN',
}

enum ButtonSizeEnum {
  BASE = 'BASE',
  LG = 'LG'
}

interface ButtonProps {
  btnStyle?: keyof typeof ButtonStyleEnum;
  size?: keyof typeof ButtonSizeEnum;
  type?: ComponentProps<"button">["type"];
  disabled?: ComponentProps<"button">["disabled"];
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  btnStyle = ButtonStyleEnum.DARK,
  size = ButtonSizeEnum.BASE,
  children,
  ...buttonProps
}) => {
  const btnClasses = clsx(
    "text-center cursor-pointer select-none border hover:bg-followLinkHover",
    {
      "border-darkgrey text-darkgrey  focus:bg-followLinkHover":
        btnStyle === ButtonStyleEnum.DARK,
      "border-followLinkHover text-followLinkHover hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
      "border-maingreen bg-maingreen text-white hover:bg-darkgreen hover:bg-darkgreen hover: text-white": btnStyle === ButtonStyleEnum.GREEN,
      "py-1 px-2 text-sm rounded-sm": size === ButtonSizeEnum.BASE,
      "py-3 px-6 text-xl rounded": size === ButtonSizeEnum.LG,
    }
  );

  return (
    <button className={btnClasses} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
