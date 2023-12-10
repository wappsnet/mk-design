import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

export interface MKLayoutContentProps {
  children?: ReactNode;
}

export const MKLayoutContent: FC<MKLayoutContentProps> = ({ children }) => {
  const { design, expanded } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-content', design, { expanded })}>{children}</div>;
};