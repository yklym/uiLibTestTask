import React, { ChangeEvent, useId } from 'react';
import clsx from 'clsx';
import { Loader } from '../Loader';

type InputVariant = 'success' | 'error' | 'default';

interface IProps {
  label?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  variant?: InputVariant;
  subLabel?: string;
  maxLength?: number;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMultiline?: boolean;
  onChange?: (value: string) => void;
}

function TextInput({
  label,
  name,
  value,
  placeholder,
  subLabel,
  variant = 'default',
  maxLength,
  isDisabled,
  isLoading,
  isMultiline,
  onChange
}: IProps) {
  const inputId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isDisabled) {
      onChange?.(e.target.value);
    }
  };

  const isSuccess = variant === 'success';
  const isError = variant === 'error';

  // to share props between text are and input
  const commonInputProps = {
    className: clsx(
      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
      isSuccess && 'bg-green-50 border border-green-500 text-green-900',
      isError &&
        'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500',
      isDisabled && 'cursor-not-allowed'
    ),
    disabled: isDisabled,
    placeholder: placeholder,
    type: 'text',
    onChange: handleChange,
    id: inputId,
    maxLength: maxLength,
    name,
    value
  };

  return (
    <div className={'relative'}>
      {isLoading && (
        <div className="absolute trans -translate-x-1/2 -translate-y-1/4 top-1/2 left-1/2">
          <Loader />
        </div>
      )}
      <div className={clsx(isLoading && 'opacity-70')}>
        {label && (
          <label
            className={clsx(
              'block mb-2 text-sm font-medium text-gray-900',
              isSuccess && 'text-green-700',
              isError && 'text-red-600'
            )}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}

        {isMultiline ? <textarea {...commonInputProps} /> : <input {...commonInputProps} />}

        {subLabel && (
          <p
            className={clsx(
              'mt-2 text-sm',
              isSuccess && 'text-green-600',
              isError && 'text-red-600'
            )}
          >
            {subLabel}
          </p>
        )}
      </div>
    </div>
  );
}

export { TextInput };
