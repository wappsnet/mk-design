import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

export interface MKLayoutFooterProps {
  children?: ReactNode;
}

export const MKLayoutFooter: FC<MKLayoutFooterProps> = ({ children }) => {
  const { theme, footer } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-footer', theme)}>{children || footer}</div>;
};
