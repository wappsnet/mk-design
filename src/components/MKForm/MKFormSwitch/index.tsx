import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKFormSwitchInputStyled, MKFormSwitchLabelStyled, MKFormSwitchStyled } from './style';

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
  <MKFormSwitchStyled className={clsx('mk-form-switch', className)}>
    <MKFormSwitchInputStyled
      type="checkbox"
      className="mk-form-switch__input"
      disabled={disabled}
      name={name}
      {...props}
      id={id}
      mkDisabled={disabled}
      mkValid={valid}
      mkInvalid={invalid}
    />
    {!!label && (
      <MKFormSwitchLabelStyled htmlFor={id} className="mk-form-switch__label">
        <span data-component="mk-checkmark" />
        {label}
      </MKFormSwitchLabelStyled>
    )}
  </MKFormSwitchStyled>
);
