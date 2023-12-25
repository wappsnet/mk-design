import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

export interface MKLayoutBannerProps {
  children?: ReactNode;
}

export const MKLayoutBanner: FC<MKLayoutBannerProps> = ({ children }) => {
  const { design, banner } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-banner', design)}>{children || banner}</div>;
};
