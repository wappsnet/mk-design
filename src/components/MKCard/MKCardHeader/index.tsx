import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKCardHeaderProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
  blank?: boolean;
  justify?: 'stretch' | 'center' | 'start' | 'end';
}

export const MKCardHeader: FC<MKCardHeaderProps> = ({
  className = '',
  inline = false,
  blank = false,
  justify = 'start',
  children,
}) => (
  <div data-testid="mk-card-header" className={classNames(['mk-card__header', className, justify, { inline, blank }])}>
    {children}
  </div>
);
