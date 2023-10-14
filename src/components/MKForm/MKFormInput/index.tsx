import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { MKShapeVariants } from 'types';
import './style.scss';

export interface MKFormInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email';
  shape?: MKShapeVariants;
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
    className={classNames(['mk-form-input', className, shape, { valid }, { invalid }])}
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
