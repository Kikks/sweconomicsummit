import type { SelectHTMLAttributes } from 'react';

export default interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  options: {
    label: string;
    value: string;
  }[];
}
