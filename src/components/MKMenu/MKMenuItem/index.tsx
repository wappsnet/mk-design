import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'definitions';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { design } = useContext(MKMenuContext);
  return <div className={classNames('mk-menu-item', className, design)}>{children}</div>;
};
