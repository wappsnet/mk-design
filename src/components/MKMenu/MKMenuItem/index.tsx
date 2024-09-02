import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { theme } = useContext(MKMenuContext);
  return <li className={classNames('mk-menu-item', className, theme)}>{children}</li>;
};
