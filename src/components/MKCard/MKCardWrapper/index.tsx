import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

export interface MKCardWrapperProps {
  className?: string;
  children?: ReactNode;
  variant?: 'light' | 'shadow';
  design?: MKStyleVariants;
}

export const MKCardWrapper: FC<MKCardWrapperProps> = ({ children, design, className, variant = 'shadow' }) => (
  <div data-testid="mk-card" className={classNames(['mk-card', className, variant, design])}>
    {children}
  </div>
);
