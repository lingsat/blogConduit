import { ComponentProps, forwardRef } from "react";

interface InputProps {
  placeholder: ComponentProps<"input">["placeholder"];
  name: ComponentProps<"input">["name"];
  onChange: ComponentProps<"input">["onChange"];
  onBlur: ComponentProps<"input">["onBlur"];
  type?: ComponentProps<"input">["type"];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }, ref) => {
    return (
      <input
        ref={ref}
        {...inputProps}
        className="border border-black/20 rounded px-6 py-3 mb-4 text-xl w-full"
      />
    );
  }
);

export default Input;
