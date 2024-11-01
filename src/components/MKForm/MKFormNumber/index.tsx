import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes } from 'types';

import { MKFormNumberStyled } from './style';

export interface MKFormNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  id: string;
  name: string;
}

export const MKFormNumber: FC<MKFormNumberProps> = ({
  shape = 'base',
  valid = false,
  invalid = false,
  disabled = false,
  value,
  min,
  max,
  step,
  className = '',
  onChange,
  onInput,
  onBlur,
  ...props
}) => (
  <MKFormNumberStyled
    className={clsx(['mk-form-number', className])}
    type="number"
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
    min={min}
    max={max}
    step={step}
    disabled={disabled}
    mkDisabled={disabled}
    mkValid={valid}
    mkInvalid={invalid}
    mkShape={shape}
    {...props}
  />
);
