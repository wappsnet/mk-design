import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import {
  MKFormCheckboxDescriptionStyled,
  MKFormCheckboxInputStyled,
  MKFormCheckboxLabelStyled,
  MKFormCheckboxRequiredStyled,
  MKFormCheckboxStyled,
} from './style';

export interface MKFormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
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

export const MKFormCheckbox: FC<MKFormCheckboxProps> = ({
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
  <MKFormCheckboxStyled {...props} className={clsx('mk-form-checkbox', className)}>
    <MKFormCheckboxInputStyled
      {...props}
      type="checkbox"
      className={clsx('mk-form-checkbox__input', { valid, invalid })}
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
      valid={valid}
      invalid={invalid}
      onChange={(e) => {
        if (disabled) {
          e.preventDefault();
        }

        onChange?.(e);
      }}
    />
    <MKFormCheckboxLabelStyled className="mk-form-checkbox__label" htmlFor={id}>
      {label && <span className="mk-form-checkbox__title">{label}</span>}
      {htmlLabel && <span className="mk-form-checkbox__title" dangerouslySetInnerHTML={{ __html: htmlLabel }} />}
      {required && (
        <MKFormCheckboxRequiredStyled className="mk-form-checkbox__required">*</MKFormCheckboxRequiredStyled>
      )}
    </MKFormCheckboxLabelStyled>
    {description && (
      <MKFormCheckboxDescriptionStyled className="mk-form-checkbox__description">
        {description}
      </MKFormCheckboxDescriptionStyled>
    )}
    {htmlDescription && (
      <MKFormCheckboxDescriptionStyled
        className="mk-form-checkbox__description"
        dangerouslySetInnerHTML={{ __html: htmlDescription }}
      />
    )}
  </MKFormCheckboxStyled>
);
