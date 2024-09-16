import { AnchorHTMLAttributes, FC } from 'react';

import { clsx } from 'clsx';

export interface MKMenuAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
}

export const MKMenuAnchor: FC<MKMenuAnchorProps> = ({ active = false, disabled = false, className = '', ...props }) => (
  <a {...props} className={clsx('mk-menu-anchor', className, { active, disabled })} />
);
