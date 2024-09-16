import './style.scss';

import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKFormRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  label?: ReactNode;
  htmlLabel?: string;
  description?: ReactNode;
  htmlDescription?: string;
  name: string;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
}

export const MKFormRadio: FC<MKFormRadioProps> = ({
  className = '',
  label,
  htmlLabel = '',
  description,
  htmlDescription = '',
  name,
  id,
  valid = false,
  invalid = false,
  disabled = false,
  ...props
}) => (
  <label className={clsx('mk-form-radio', className, { valid, invalid })} htmlFor={id}>
    <input type="radio" className="mk-form-radio__input" name={name} id={id} disabled={disabled} {...props} />
    <span className="mk-form-radio__mark" />
    {(!!label || !!htmlLabel) && (
      <div className="mk-form-radio__label">
        {!!label && <span className="mk-form-radio__title">{label}</span>}
        {!!htmlLabel && <div className="mk-form-radio__title" dangerouslySetInnerHTML={{ __html: htmlLabel }} />}
        {!!description && <span className="mk-form-radio__description">{description}</span>}
        {!!htmlDescription && (
          <div className="mk-form-radio__description" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
        )}
      </div>
    )}
  </label>
);
