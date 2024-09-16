import './style.scss';

import { FC, LabelHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKIcon } from 'core/MKIcon';

export interface MKFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  description?: ReactNode;
  required?: boolean;
}

export const MKFormLabel: FC<MKFormLabelProps> = ({
  className = '',
  children,
  required = false,
  description,
  ...props
}) => (
  <label {...props} className={clsx('mk-form-label', className)}>
    {children && (
      <span className="mk-form-label__title">
        {children}
        {required && <span className="mk-form-label__required">{'*'}</span>}
      </span>
    )}
    {description && (
      <span className="mk-form-label__description">
        <span className="mk-form-label__info">
          <MKIcon icon="circle-info" />
        </span>
        {description}
      </span>
    )}
  </label>
);
