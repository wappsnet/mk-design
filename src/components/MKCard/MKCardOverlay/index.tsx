import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKCardItemProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

const MKCardOverlay: FC<MKCardItemProps> = ({ className = '', children }) => (
  <div data-testid="mk-card-overlay" className={classNames(['mk-card__overlay', className])}>
    {children}
  </div>
);

export default MKCardOverlay;
