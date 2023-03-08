import clsx from 'clsx';
import { ComponentProps, forwardRef } from "react";

enum InputSize {
  BASE = "BASE",
  SM = "SM",

}

interface InputProps {
  placeholder: ComponentProps<"input">["placeholder"];
  name: ComponentProps<"input">["name"];
  onChange: ComponentProps<"input">["onChange"];
  onBlur: ComponentProps<"input">["onBlur"];
  type?: ComponentProps<"input">["type"];
  size?: keyof typeof InputSize;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = InputSize.BASE, ...inputProps }, ref) => {
    const inputClasses = clsx('border border-black/20 rounded w-full', {
      'px-6 py-3 text-xl': size === InputSize.BASE,
      'px-2 py-1 text-base': size === InputSize.SM,
    })

    return (
      <input
        ref={ref}
        {...inputProps}
        className={inputClasses}
      />
    );
  }
);

export default Input;
