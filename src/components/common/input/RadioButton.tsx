import React, { useId } from 'react';

interface IProps {
  label: string;
}

function RadioButton({ label }: IProps) {
  const inputId = useId();
  return (
    <label htmlFor={inputId}>
      <input id={inputId} type="radio" />
      {label}
    </label>
  );
}

export { RadioButton };
