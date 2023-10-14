import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MQCardSubTitleProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardSubTitle: FC<MQCardSubTitleProps> = ({ className = '', children }) => (
  <h5 data-testid="mk-card-subtitle" className={classNames(['mk-card__subtitle', className])}>
    {children}
  </h5>
);
