import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

type MKMenuBarProps = {
  children?: ReactNode;
  className?: string;
};

const MKMenuBar: FC<MKMenuBarProps> = ({ children, className = '' }) => {
  return <div className={classNames('mk-menu-bar', className)}>{children}</div>;
};

export default MKMenuBar;
