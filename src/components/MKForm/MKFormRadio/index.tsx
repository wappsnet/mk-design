import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import {
  MKFormRadioDescriptionStyled,
  MKFormRadioInputStyled,
  MKFormRadioLabelStyled,
  MKFormRadioRequiredStyled,
  MKFormRadioStyled,
} from './style';

export interface MKFormRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  htmlLabel?: string;
  description?: ReactNode;
  htmlDescription?: string;
  required?: boolean;
  valid?: boolean;
  invalid?: boolean;
  ariaLabel?: string;
  id: string;
  name: string;
}

export const MKFormRadio: FC<MKFormRadioProps> = ({
  disabled = false,
  htmlLabel = '',
  label = '',
  description = '',
  htmlDescription = '',
  onChange,
  valid = false,
  invalid = false,
  className,
  id,
  required,
  ariaLabel = 'Checkbox field',
  ...props
}) => (
  <MKFormRadioStyled {...props} className={clsx('mk-form-radio', className)}>
    <MKFormRadioInputStyled
      {...props}
      type="radio"
      className={clsx('mk-form-radio__input')}
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
      mkValid={valid}
      mkInvalid={invalid}
      mkDisabled={disabled}
      onChange={(e) => {
        if (disabled) {
          e.preventDefault();
        }

        onChange?.(e);
      }}
    />
    <MKFormRadioLabelStyled className="mk-form-radio__label" htmlFor={id}>
      {label && <span className="mk-form-radio__title">{label}</span>}
      {htmlLabel && <span className="mk-form-radio__title" dangerouslySetInnerHTML={{ __html: htmlLabel }} />}
      {required && <MKFormRadioRequiredStyled className="mk-form-radio__required">*</MKFormRadioRequiredStyled>}
    </MKFormRadioLabelStyled>
    {description && (
      <MKFormRadioDescriptionStyled className="mk-form-radio__description">{description}</MKFormRadioDescriptionStyled>
    )}
    {htmlDescription && (
      <MKFormRadioDescriptionStyled
        className="mk-form-radio__description"
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    )}
  </MKFormRadioStyled>
);
