import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { design } = useContext(MKMenuContext);
  return <li className={classNames('mk-menu-item', className, design)}>{children}</li>;
};
