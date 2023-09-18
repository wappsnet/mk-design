import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKCardWrapperProps {
  className?: string;
  children?: ReactNode;
  variant?: 'light' | 'shadow';
}

const MKCardWrapper: FC<MKCardWrapperProps> = ({ children, className, variant = 'shadow' }) => (
  <div data-testid="mk-card" className={classNames(['mk-card', className, variant])}>
    {children}
  </div>
);

export default MKCardWrapper;
