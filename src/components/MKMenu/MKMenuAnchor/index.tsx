import { AnchorHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKMenuAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
}

export const MKMenuAnchor: FC<MKMenuAnchorProps> = ({ active = false, disabled = false, className = '', ...props }) => (
  <a {...props} className={classNames('mk-menu-anchor', className, { active, disabled })} />
);
