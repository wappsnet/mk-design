import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKFormRadioProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label?: ReactNode;
  name: string;
  isValid?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
}

export const MKFormRadio: FC<MKFormRadioProps> = ({
  className = '',
  name,
  id,
  label,
  isValid = false,
  isInvalid = false,
  disabled = false,
  ...props
}) => (
  <label className={classNames('mk-form-radio', className, { valid: isValid, invalid: isInvalid })} htmlFor={id}>
    <input type="radio" className="mk-form-radio__input" name={name} id={id} disabled={disabled} {...props} />
    <span className="mk-form-radio__mark" />
    {!!label && <span className="mk-form-radio__label">{label}</span>}
  </label>
);
