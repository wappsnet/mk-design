import './style.scss';

import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKFormRadioInputStyled } from '../MKFormRadio/style';

import { MKFormSwitchLabelStyled } from './style';

export interface MKFormSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  label?: ReactNode;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}

export const MKFormSwitch: FC<MKFormSwitchProps> = ({
  className = '',
  name,
  id,
  label,
  valid = false,
  invalid = false,
  disabled = false,
  ...props
}) => (
  <MKFormSwitchLabelStyled className={clsx('mk-form-switch', className)} htmlFor={id}>
    <MKFormRadioInputStyled
      type="checkbox"
      className="mk-form-switch__input"
      disabled={disabled}
      name={name}
      id={id}
      {...props}
      mkDisabled={disabled}
      mkValid={valid}
      mkInvalid={invalid}
    />
    <span className="mk-form-switch__mark" />
    {!!label && <span className="mk-form-switch__label">{label}</span>}
  </MKFormSwitchLabelStyled>
);
