import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes } from 'types';

import { MKFormSelectStyled } from './style';

export interface MKFormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string | number;
  id: string;
  name: string;
}

export const MKFormSelect: FC<MKFormSelectProps> = ({
  shape = 'base',
  valid = false,
  invalid = false,
  disabled = false,
  name,
  id,
  value,
  className = '',
  onChange,
  onBlur,
  ...props
}) => (
  <MKFormSelectStyled
    className={clsx(['mk-form-input', className])}
    onChange={(e) => {
      if (!disabled) {
        onChange?.(e);
      }
    }}
    onBlur={(e) => {
      if (!disabled) {
        onBlur?.(e);
      }
    }}
    value={value}
    mkValid={valid}
    mkInvalid={invalid}
    disabled={disabled}
    mkDisabled={disabled}
    mkShape={shape}
    name={name}
    id={id}
    {...props}
  />
);
