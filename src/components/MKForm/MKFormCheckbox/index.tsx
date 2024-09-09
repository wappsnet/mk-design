import './style.scss';

import { FC, InputHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKFormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label?: ReactNode;
  htmlLabel?: string;
  description?: ReactNode;
  htmlDescription?: string;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}

export const MKFormCheckbox: FC<MKFormCheckboxProps> = ({
  disabled,
  label = '',
  htmlLabel = '',
  description = '',
  htmlDescription = '',
  valid = false,
  invalid = false,
  className,
  id,
  name,
  checked = false,
  ...props
}) => (
  <label className={classNames('mk-form-checkbox', className, { valid, invalid })} htmlFor={id}>
    <input
      type="checkbox"
      className="mk-form-checkbox__input"
      disabled={disabled}
      name={name}
      checked={checked}
      id={id}
      {...props}
    />
    <span className="mk-form-checkbox__mark" />
    {(!!label || !!htmlLabel) && (
      <div className="mk-form-checkbox__label">
        {!!label && <span className="mk-form-checkbox__label-title">{label}</span>}
        {!!htmlLabel && (
          <div className="mk-form-checkbox__label-title" dangerouslySetInnerHTML={{ __html: htmlLabel }} />
        )}
        {!!description && <span className="mk-form-checkbox__label-description">{description}</span>}
        {!!htmlDescription && (
          <span className="mk-form-checkbox__label-description" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
        )}
      </div>
    )}
  </label>
);
