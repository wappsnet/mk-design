import { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { MKMenuContext } from 'definitions';
import './style.scss';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { variant } = useContext(MKMenuContext);
  return <div className={classNames('mk-menu-item', className, variant)}>{children}</div>;
};
