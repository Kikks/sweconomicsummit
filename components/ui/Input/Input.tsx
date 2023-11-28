import type { FC } from 'react';
import React from 'react';

import type InputProps from './Input.props';

const Input: FC<InputProps> = ({
  label,
  required,
  error,
  helperText,
  id,
  ...rest
}) => {
  return (
    <div className="mb-6 w-full md:mb-0">
      {label && (
        <label
          className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-blue-950"
          htmlFor={id}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={`mb-3 block h-10 w-full appearance-none rounded border bg-gray-50 px-4 py-1 font-heebo text-blue-950 duration-300 focus:bg-white focus:outline-blue-500 ${
          error ? '!border-red-500' : ''
        }`}
        id={id}
        required={required}
        {...rest}
      />
      <p className={`text-xs ${error ? 'italic text-red-500 ' : ''}`}>
        {helperText}
      </p>
    </div>
  );
};

export default Input;
