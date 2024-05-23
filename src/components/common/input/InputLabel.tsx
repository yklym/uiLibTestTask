import React from 'react';

import { clsx } from 'clsx';

interface IProps {
  htmlFor?: string;
  className?: string;
  children: JSX.Element | string;
}

function InputLabel({ htmlFor, className = '', children }: IProps) {
  return (
    <label htmlFor={htmlFor} className={clsx('', className)}>
      {children}
    </label>
  );
}

export { InputLabel };
