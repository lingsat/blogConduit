import MDEditor from "@uiw/react-md-editor";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface MdEditorHookFormProps {
  name: string;
  control: Control<any>;
}

const MdEditorHookForm: FC<MdEditorHookFormProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <MDEditor value={value} onChange={onChange} data-color-mode="light" />
      )}
    />
  );
};

export default MdEditorHookForm;
