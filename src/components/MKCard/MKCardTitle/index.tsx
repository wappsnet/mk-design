import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MQCardTitleProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardTitle: FC<MQCardTitleProps> = ({ className = '', children }) => (
  <h4 data-testid="mk-card-title" className={classNames(['mk-card__title', className])}>
    {children}
  </h4>
);
