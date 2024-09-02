import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

export interface MKLayoutBodyProps {
  children?: ReactNode;
}

export const MKLayoutBody: FC<MKLayoutBodyProps> = ({ children }) => {
  const { theme } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-body', theme)}>{children}</div>;
};
