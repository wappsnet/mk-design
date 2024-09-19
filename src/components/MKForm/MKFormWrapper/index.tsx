import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKFormStyled } from './style';

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
  <MKFormStyled id={formId} className={clsx('mk-form', className, { inline })} {...props} inline={inline}>
    {children}
  </MKFormStyled>
);
