import clsx from 'clsx';
import { ComponentProps, forwardRef } from 'react';

enum TextAreaSize {
  SM = 'SM',
  BASE = 'BASE',
}

interface TextAreaProps {
  placeholder: ComponentProps<'textarea'>['placeholder'];
  name: ComponentProps<'textarea'>['name'];
  onChange: ComponentProps<'textarea'>['onChange'];
  onBlur: ComponentProps<'textarea'>['onBlur'];
  rows: ComponentProps<'textarea'>['rows'];
  className?: ComponentProps<'textarea'>['className'];
  noBorder?: boolean;
  size?: keyof typeof TextAreaSize;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ size = TextAreaSize.BASE, noBorder, className, ...TextAreaProps }, ref) => {
    const inputClasses = clsx(
      'border border-black/20 rounded w-full outline-none resize-none',
      {
        'py-3 px-6 text-xl': size === TextAreaSize.BASE,
        'py-1 px-2 text-base': size === TextAreaSize.SM,
        'border-0': noBorder,
      },
      className
    );

    return <textarea ref={ref} {...TextAreaProps} className={inputClasses} />;
  }
);

export default TextArea;