import MDEditor from "@uiw/react-md-editor";
import { ComponentProps, FC } from "react";
import { Control, Controller } from "react-hook-form";

interface MdEditorHookFormProps extends ComponentProps<typeof MDEditor> {
  name: string;
  control: Control<any>;
}

const MdEditorHookForm: FC<MdEditorHookFormProps> = ({
  name,
  control,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <MDEditor value={value} onChange={onChange} {...props} data-color-mode="light" />
      )}
    />
  );
};

export default MdEditorHookForm;
