import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKCardWrapperProps {
  className?: string;
  children?: ReactNode;
  variant?: 'light' | 'shadow';
}

export const MKCardWrapper: FC<MKCardWrapperProps> = ({ children, className, variant = 'shadow' }) => (
  <div data-testid="mk-card" className={classNames(['mk-card', className, variant])}>
    {children}
  </div>
);
