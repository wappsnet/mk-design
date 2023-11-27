import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  active?: boolean;
  separator?: string;
}

export const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, separator = '/', active = false }) => (
  <li data-separator={separator} className={classNames('mk-breadcrumb-item', { active })}>
    {children}
  </li>
);
