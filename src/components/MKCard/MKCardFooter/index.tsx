import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKCardFooterProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
  blank?: boolean;
  justify?: 'stretch' | 'center' | 'start' | 'end';
}

export const MKCardFooter: FC<MKCardFooterProps> = ({
  className = '',
  justify = 'space-between',
  children,
  inline = false,
  blank = false,
}) => (
  <div data-testid="mk-card-footer" className={classNames(['mk-card__footer', className, justify, { inline, blank }])}>
    {children}
  </div>
);
