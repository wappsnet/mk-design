import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKFormNavbarSectionProps {
  children: ReactNode;
  className?: string;
  align?: 'start' | 'end';
}

export const MKFormNavbarSection: FC<MKFormNavbarSectionProps> = ({ className = '', children, align = 'end' }) => (
  <div className={classNames('mk-form-navbar-section', className, align)}>{children}</div>
);

export default MKFormNavbarSection;
