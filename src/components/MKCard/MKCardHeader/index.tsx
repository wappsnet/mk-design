import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKCardHeaderProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
  highlighted?: boolean;
}

export const MKCardHeader: FC<MKCardHeaderProps> = ({
  className = '',
  inline = false,
  highlighted = false,
  children,
}) => (
  <div data-testid="mk-card-header" className={classNames(['mk-card__header', className, { inline }, { highlighted }])}>
    {children}
  </div>
);
