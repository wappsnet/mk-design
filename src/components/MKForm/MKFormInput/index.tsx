import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes } from 'types';

import { MKFormInputStyled } from './style';

export interface MKFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email' | 'password';
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string;
  id: string;
  name: string;
}

export const MKFormInput: FC<MKFormInputProps> = ({
  type = 'text',
  shape = 'base',
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
  <MKFormInputStyled
    className={clsx(['mk-form-input', className])}
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
    mkShape={shape}
    mkValid={valid}
    mkInvalid={invalid}
    mkDisabled={disabled}
    disabled={disabled}
    {...props}
  />
);
