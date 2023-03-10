import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
  GREEN = "GREEN",
  RED = "RED",
}

enum ButtonSizeEnum {
  BASE = "BASE",
  LG = "LG",
}
enum ButtonVariantEnum {
  BASE = "BASE",
  OUTLINE = "OUTLINE",
}

interface ButtonProps {
  btnStyle?: keyof typeof ButtonStyleEnum;
  size?: keyof typeof ButtonSizeEnum;
  variant?: keyof typeof ButtonVariantEnum;
  type?: ComponentProps<"button">["type"];
  disabled?: ComponentProps<"button">["disabled"];
  onClick?: ComponentProps<"button">["onClick"];
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  btnStyle = ButtonStyleEnum.DARK,
  size = ButtonSizeEnum.BASE,
  variant = ButtonVariantEnum.BASE,
  children,
  ...buttonProps
}) => {
  const btnClasses = clsx(
    "text-center align-middle cursor-pointer select-none border disabled:opacity-70",
    {
      "border-darkgrey text-darkgrey hover:bg-followLinkHover focus:bg-followLinkHover":
        btnStyle === ButtonStyleEnum.DARK,
      "border-followLinkHover text-followLinkHover hover:bg-followLinkHover hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,
      "border-maingreen": btnStyle === ButtonStyleEnum.GREEN,
      "border-redError text-redError hover:bg-redError hover:text-white focus:bg-redError disabled:bg-redError disabled:text-white disabled:cursor-not-allowed":
        btnStyle === ButtonStyleEnum.RED,
      "bg-maingreen text-white hover:bg-darkgreen hover:border-darkgreen hover:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.BASE,
      "bg-white text-maingreen hover:bg-maingreen hover:text-white disabled:bg-darkgreen disabled:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        variant === ButtonVariantEnum.OUTLINE,
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
