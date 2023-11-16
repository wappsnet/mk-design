import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKFormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  description?: ReactNode;
}

export const MKFormLabel: FC<MKFormLabelProps> = ({ className = '', children, description, ...props }) => (
  <label {...props} className={classNames('mk-form-label', className)}>
    {children && <span className="mk-form-label__title">{children}</span>}
    {description && <em className="mk-form-label__title">{children}</em>}
  </label>
);
