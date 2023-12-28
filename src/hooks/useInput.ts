import { ChangeEventHandler, useState } from "react";

const useInput = (
  defaultValue: string = "",
  changeEventHandler?: () => void
) => {
  const [value, setValue] = useState(defaultValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => {
    setValue(e.target.value);
    changeEventHandler?.();
  };

  return [value, onChange] as const;
};

export default useInput;
