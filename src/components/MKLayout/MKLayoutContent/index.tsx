import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

export interface MKLayoutContentProps {
  children?: ReactNode;
}

export const MKLayoutContent: FC<MKLayoutContentProps> = ({ children }) => {
  const { theme, expanded } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-content', theme, { expanded })}>{children}</div>;
};
