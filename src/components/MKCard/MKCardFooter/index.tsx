import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKCardFooterProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
  alt?: boolean;
  justify?: 'stretch' | 'center' | 'start' | 'end';
}

export const MKCardFooter: FC<MKCardFooterProps> = ({
  className = '',
  justify = 'space-between',
  children,
  alt = false,
}) => (
  <div data-testid="mk-card-footer" className={classNames(['mk-card__footer', className, justify, { alt }])}>
    {children}
  </div>
);
