import './style.scss';

import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKFormSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  label?: ReactNode;
  isValid?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
}

export const MKFormSwitch: FC<MKFormSwitchProps> = ({
  className = '',
  name,
  id,
  label,
  isValid = false,
  isInvalid = false,
  disabled = false,
  ...props
}) => (
  <label className={clsx('mk-form-switch', className, { valid: isValid, invalid: isInvalid })} htmlFor={id}>
    <input type="checkbox" className="mk-form-switch__input" disabled={disabled} name={name} id={id} {...props} />
    <span className="mk-form-switch__mark" />
    {!!label && <span className="mk-form-switch__label">{label}</span>}
  </label>
);
