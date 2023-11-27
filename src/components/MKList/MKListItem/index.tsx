import './style.scss';

import { FC, ReactNode } from 'react';

export interface MKListItemProps {
  children?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
  actions?: ReactNode[];
  extra?: ReactNode;
}

export const MKListItem: FC<MKListItemProps> = ({ children, start, end, extra, description, label, actions }) => (
  <li className="mk-list-item">
    {start && <div className="mk-list-item__start">{start}</div>}
    <div className="mk-list-item__content">
      {label && <div className="mk-list-item__content-label">{label}</div>}
      {description && <div className="mk-list-item__content-description">{description}</div>}
      {children && <div className="mk-list-item__content-child">{children}</div>}
    </div>
    {extra && <div className="mk-list-item__extra">{extra}</div>}
    {actions?.length && <div className="mk-list-item__actions">{actions}</div>}
    {end && <div className="mk-list-item__end">{end}</div>}
  </li>
);
