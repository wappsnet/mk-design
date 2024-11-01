import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { BreadcrumbItemStyled } from './style';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  active?: boolean;
  className?: string;
}

export const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, className = '', active = false }) => (
  <BreadcrumbItemStyled className={clsx('mk-breadcrumb-item', className)} mkActive={active}>
    {children}
  </BreadcrumbItemStyled>
);
