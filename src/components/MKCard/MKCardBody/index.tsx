import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKCardBodyProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardBody: FC<MKCardBodyProps> = ({ className = '', compact = false, children }) => (
  <div data-testid="mk-card-body" className={classNames(['mk-card__body', className, { compact }])}>
    {children}
  </div>
);
