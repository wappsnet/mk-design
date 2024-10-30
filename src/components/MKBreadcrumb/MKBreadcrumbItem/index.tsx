import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { BreadcrumbItemStyled } from './style';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  active?: boolean;
}

export const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, active = false }) => (
  <BreadcrumbItemStyled className={clsx('mk-breadcrumb-item')} mkActive={active}>
    {children}
  </BreadcrumbItemStyled>
);
