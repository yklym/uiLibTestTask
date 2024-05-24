import React from 'react';
import { Loader } from './Loader';

interface IProps {
  isLoading?: boolean;
  label: string;
  onClick?: () => void;
}
function Button({ isLoading, label, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center"
      disabled={isLoading}
      type="button"
    >
      {/* loader */}

      {isLoading && (
        <div className="mr-2">
          <Loader size={4} />
        </div>
      )}
      {/*  */}
      {label}
    </button>
  );
}

export { Button };
