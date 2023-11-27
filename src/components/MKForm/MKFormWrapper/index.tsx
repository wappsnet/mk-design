import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKFormWrapperProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  formId?: string;
  inline?: boolean;
}

export const MKFormWrapper: FC<MKFormWrapperProps> = ({
  className = '',
  inline = false,
  children,
  formId,
  ...props
}) => (
  <form id={formId} className={classNames('mk-form', className, { inline })} {...props}>
    {children}
  </form>
);
