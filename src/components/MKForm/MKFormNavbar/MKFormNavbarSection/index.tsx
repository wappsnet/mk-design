import './style.scss';

import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKFormNavbarSectionProps {
  children: ReactNode;
  className?: string;
  align?: 'start' | 'end';
}

export const MKFormNavbarSection: FC<MKFormNavbarSectionProps> = ({ className = '', children, align = 'end' }) => (
  <div className={clsx('mk-form-navbar-section', className, align)}>{children}</div>
);

export default MKFormNavbarSection;
