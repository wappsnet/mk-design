import './style.scss';

import { FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

export interface MKFormRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  name?: string;
  isValid?: boolean;
  isInvalid?: boolean;
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
  isValid = false,
  isInvalid = false,
  disabled = false,
  value = 0,
  max = 100,
  min = 0,
  step = 1,
  ...props
}) => (
  <div className="mk-form-range">
    <input
      id={id}
      name={name}
      type="range"
      className={classNames('mk-form-range__input', className, { valid: isValid, invalid: isInvalid, disabled })}
      value={value}
      step={step}
      min={min}
      max={max}
      {...props}
    />
    <span
      className="mk-form-range__progress"
      style={{ width: `${(Math.max(min, Math.min(value, max)) / max) * 100}%` }}
    />
  </div>
);
