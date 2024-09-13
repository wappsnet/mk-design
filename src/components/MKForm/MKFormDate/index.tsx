import './style.scss';

import { FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

import { MKShapeTypes } from 'types';

export interface MKFormDateProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  isValid?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
  type?: 'date' | 'datetime-local' | 'time' | 'month';
  shape?: MKShapeTypes;
}

export const MKFormDate: FC<MKFormDateProps> = ({
  id,
  name,
  className = '',
  isInvalid = false,
  isValid = false,
  disabled = false,
  type = 'date',
  shape = 'round',
  ...props
}) => (
  <input
    className={classNames('mk-date-input', className, { invalid: isInvalid, valid: isValid, disabled }, shape)}
    id={id}
    name={name}
    type={type}
    disabled={disabled}
    {...props}
  />
);
