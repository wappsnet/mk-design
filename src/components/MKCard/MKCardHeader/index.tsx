import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKCardHeaderProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
  highlighted?: boolean;
}

const MKCardHeader: FC<MKCardHeaderProps> = ({ className = '', inline = false, highlighted = false, children }) => (
  <div data-testid="mk-card-header" className={classNames(['mk-card__header', className, { inline }, { highlighted }])}>
    {children}
  </div>
);

export default MKCardHeader;
