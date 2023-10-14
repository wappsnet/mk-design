import { FC, HTMLAttributes, ReactNode } from 'react';

export interface MKFormWrapperProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  formId?: string;
}

export const MKFormWrapper: FC<MKFormWrapperProps> = ({ children, formId, ...props }) => (
  <form id={formId} {...props}>
    {children}
  </form>
);
