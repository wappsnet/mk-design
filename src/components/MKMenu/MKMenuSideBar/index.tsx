import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import './style.scss';

import { MKMenuContext } from 'definitions';

type MKMenuSideBarProps = {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
};

export const MKMenuSideBar: FC<MKMenuSideBarProps> = ({ children, className = '', align = 'left' }) => {
  const { variant } = useContext(MKMenuContext);

  return <div className={classNames('mk-menu-sidebar', className, align, variant)}>{children}</div>;
};
