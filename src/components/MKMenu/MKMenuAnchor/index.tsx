import { AnchorHTMLAttributes, FC } from 'react';

import { clsx } from 'clsx';

import { MKAnchorStyled } from './style';

export interface MKMenuAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
}

export const MKMenuAnchor: FC<MKMenuAnchorProps> = ({ active = false, disabled = false, className = '', ...props }) => (
  <MKAnchorStyled {...props} className={clsx('mk-menu-anchor', className)} mkActive={active} mkDisabled={disabled} />
);
