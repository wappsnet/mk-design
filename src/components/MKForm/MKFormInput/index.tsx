import './style.scss';

import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes } from 'types';

export interface MKFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email' | 'password';
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string;
}

export const MKFormInput: FC<MKFormInputProps> = ({
  type = 'text',
  shape = 'round',
  valid = false,
  invalid = false,
  disabled = false,
  value,
  className = '',
  onChange,
  onInput,
  onBlur,
  ...props
}) => (
  <input
    className={clsx(['mk-form-input', className, shape, { valid }, { invalid }])}
    type={type}
    onChange={(e) => {
      if (!disabled) {
        onChange?.(e);
      }
    }}
    onInput={(e) => {
      if (!disabled) {
        onInput?.(e);
      }
    }}
    onBlur={(e) => {
      if (!disabled) {
        onBlur?.(e);
      }
    }}
    value={value}
    {...props}
  />
);
