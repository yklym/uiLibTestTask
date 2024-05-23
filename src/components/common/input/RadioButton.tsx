import React, { useId } from 'react';

interface IProps {
  label: string;
  name?: string;
  checked?: boolean;
  onSetValue?: (value: boolean) => void;
}

function RadioButton({ label, name, checked = false, onSetValue }: IProps) {
  const inputId = useId();

  const handleChange = () => {
    onSetValue?.(!checked);
  };

  return (
    <div className="flex items-center my-1">
      <input
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        type="radio"
        name={name ?? inputId}
        id={inputId}
        checked={checked}
        onChange={handleChange}
      />

      <label
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}

export { RadioButton };
