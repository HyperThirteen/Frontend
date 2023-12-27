interface Props {
  label: string;
}

const CategoryRadio = ({ label }: Props) => {
  return (
    <label className="flex items-center gap-1 cursor-pointer">
      <input type="radio" name="category" className="cursor-pointer" />
      {label}
    </label>
  );
};

export default CategoryRadio;
