import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKFormSwitchProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label?: ReactNode;
  name: string;
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
  <label className={classNames('mk-form-switch', className, { valid: isValid, invalid: isInvalid })} htmlFor={id}>
    <input type="checkbox" className="mk-form-switch__input" disabled={disabled} name={name} id={id} {...props} />
    <span className="mk-form-switch__mark" />
    {!!label && <span className="mk-form-switch__label">{label}</span>}
  </label>
);
