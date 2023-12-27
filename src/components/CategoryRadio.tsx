import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CategoryRadio = ({ label, ...props }: Props) => {
  return (
    <label className="flex items-center gap-1 cursor-pointer">
      <input
        type="radio"
        name="category"
        className="cursor-pointer"
        {...props}
      />
      {label}
    </label>
  );
};

export default CategoryRadio;
