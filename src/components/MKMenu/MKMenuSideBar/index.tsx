import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'definitions';

type MKMenuSideBarProps = {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'right';
};

export const MKMenuSideBar: FC<MKMenuSideBarProps> = ({ children, className = '', align = 'left' }) => {
  const { design } = useContext(MKMenuContext);

  return <div className={classNames('mk-menu-sidebar', className, align, design)}>{children}</div>;
};
