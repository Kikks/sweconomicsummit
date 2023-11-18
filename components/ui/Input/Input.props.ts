import type { InputHTMLAttributes } from 'react';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}
