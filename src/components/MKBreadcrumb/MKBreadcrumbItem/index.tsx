import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  active?: boolean;
  separator?: string;
}

const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, separator = '/', active = false }) => (
  <li data-separator={separator} className={classNames('mk-breadcrumb-item', { active })}>
    {children}
  </li>
);

export default MKBreadcrumbItem;
