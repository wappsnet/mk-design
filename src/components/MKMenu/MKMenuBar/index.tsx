import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKMenuBarProps {
  children?: ReactNode;
  className?: string;
}

export const MKMenuBar: FC<MKMenuBarProps> = ({ children, className = '' }) => (
  <div className={classNames('mk-menu-bar', className)}>{children}</div>
);
