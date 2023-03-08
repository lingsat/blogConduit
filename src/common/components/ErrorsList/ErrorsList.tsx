import { FC } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';

interface ErrorListProps {
  errors: Partial<FieldErrorsImpl<any>>;
}

const ErrorsList: FC<ErrorListProps> = ({ errors }) => {
  return (
    <ul className="list-disc pl-10 mb-4">
      {(Object.keys(errors) as (keyof typeof errors)[]).map(
        (field) => (
          <li key={`error-${String(field)}`} className="text-redError font-bold">
            {errors[String(field)]!.message as string}
          </li>
        )
      )}
    </ul>
  );
};

export default ErrorsList;
