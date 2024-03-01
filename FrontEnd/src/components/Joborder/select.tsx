import { useId } from "react";

type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  isforForm: boolean;
  readonly: boolean;
};

const Select = ({
  label,
  value,
  onChange,
  options,
  isforForm,
  readonly = false,
}: SelectProps) => {
  const id = useId();
  return (
    <div className="flex">
      <label htmlFor={id} className={isforForm ? "" : "flex-grow"}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-56 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
        disabled={readonly}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
