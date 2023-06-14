import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKBreadcrumbItemProps {
  children?: ReactNode;
  icon?: ReactNode;
  link?: string;
  active?: boolean;
}

const MKBreadcrumbItem: FC<MKBreadcrumbItemProps> = ({ children, icon, link, active = false }) => (
  <div className={classNames('mk-breadcrumb-item', { active })}>
    <a
      href={link}
      onClick={(e) => {
        if (active) {
          e.preventDefault();
        }
      }}
    >
      {icon && <span className="mk-breadcrumb-item__icon">{icon}</span>}
      {children && <span className="mk-breadcrumb-item__label">{children}</span>}
    </a>
  </div>
);

export default MKBreadcrumbItem;
