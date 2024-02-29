import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

export interface MKLayoutFooterProps {
  children?: ReactNode;
}

export const MKLayoutFooter: FC<MKLayoutFooterProps> = ({ children }) => {
  const { design, footer } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-footer', design)}>{children || footer}</div>;
};
