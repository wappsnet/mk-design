import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { BreadcrumbItemStyled } from './style';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  active?: boolean;
}

export const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, active = false }) => (
  <BreadcrumbItemStyled className={classNames('mk-breadcrumb-item')} active={active}>
    {children}
  </BreadcrumbItemStyled>
);
