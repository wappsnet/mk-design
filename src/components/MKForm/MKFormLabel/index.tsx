import './style.scss';

import { FC, LabelHTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

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
  <label {...props} className={classNames('mk-form-label', className)}>
    {children && (
      <span className="mk-form-label__title">
        {children}
        {required && <span className="mk-form-label__required">{'*'}</span>}
      </span>
    )}
    {description && (
      <span className="mk-form-label__description">
        <span className="mk-form-label__info">
          <MKIcon name="circle-info" />
        </span>
        {description}
      </span>
    )}
  </label>
);
