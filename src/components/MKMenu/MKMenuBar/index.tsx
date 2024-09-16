import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKMenuBarProps {
  children?: ReactNode;
  className?: string;
}

export const MKMenuBar: FC<MKMenuBarProps> = ({ children, className = '' }) => (
  <div className={clsx('mk-menu-bar', className)}>{children}</div>
);
