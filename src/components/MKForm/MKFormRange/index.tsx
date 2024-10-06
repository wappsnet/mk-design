import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKFormRangeInputStyled, MKFormRangeProgressStyled, MKFormRangeStyled } from './style';

export interface MKFormRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  name?: string;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

export const MKFormRange: FC<MKFormRangeProps> = ({
  className = '',
  id,
  name,
  valid = false,
  invalid = false,
  disabled = false,
  value = 0,
  max = 100,
  min = 0,
  step = 1,
  ...props
}) => (
  <MKFormRangeStyled className="mk-form-range" valid={valid} invalid={invalid} disabled={disabled}>
    <MKFormRangeInputStyled
      id={id}
      name={name}
      type="range"
      className={clsx('mk-form-range__input', className, { valid, invalid, disabled })}
      value={value}
      step={step}
      min={min}
      max={max}
      {...props}
    />
    <MKFormRangeProgressStyled
      className="mk-form-range__progress"
      value={value}
      max={max}
      min={min}
      style={{ width: `${(Math.max(min, Math.min(value, max)) / max) * 100}%` }}
    />
  </MKFormRangeStyled>
);
