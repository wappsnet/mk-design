import { FC, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes } from 'types';

import { MKFormDateStyled } from './style';

export interface MKFormDateProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  type?: 'date' | 'datetime-local' | 'time' | 'month';
  shape?: MKShapeTypes;
}

export const MKFormDate: FC<MKFormDateProps> = ({
  id,
  name,
  className = '',
  invalid = false,
  valid = false,
  disabled = false,
  type = 'date',
  shape = 'base',
  ...props
}) => (
  <MKFormDateStyled
    className={clsx('mk-date-input', className, { invalid, valid, disabled }, shape)}
    id={id}
    name={name}
    type={type}
    disabled={disabled}
    mkDisabled={disabled}
    mkShape={shape}
    mkValid={valid}
    mkInvalid={invalid}
    {...props}
  />
);
