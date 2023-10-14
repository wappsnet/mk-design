import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { MKShapeVariants } from 'types';

import './style.scss';

export interface MKFormDateProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  isValid?: boolean;
  isInvalid?: boolean;
  disabled?: boolean;
  type?: 'date' | 'datetime-local' | 'time' | 'month';
  shape?: MKShapeVariants;
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
