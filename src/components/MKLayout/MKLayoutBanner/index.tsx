import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

export interface MKLayoutBannerProps {
  children?: ReactNode;
}

export const MKLayoutBanner: FC<MKLayoutBannerProps> = ({ children }) => {
  const { theme, banner } = useContext(MKLayoutContext);

  return <div className={classNames('mk-layout-banner', theme)}>{children || banner}</div>;
};
