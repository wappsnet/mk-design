import './style.scss';

import { FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

import { MKShapeTypes } from 'types';

export interface MKFormNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

export const MKFormNumber: FC<MKFormNumberProps> = ({
  shape = 'round',
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
  <input
    className={classNames(['mk-form-number', className, shape, { valid }, { invalid }])}
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
    {...props}
  />
);
