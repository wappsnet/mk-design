import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

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
  <form id={formId} className={clsx('mk-form', className, { inline })} {...props}>
    {children}
  </form>
);
