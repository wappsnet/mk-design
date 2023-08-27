import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKFormRangeProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  isValid?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
}

const MKFormRange: FC<MKFormRangeProps> = ({
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

export default MKFormRange;
