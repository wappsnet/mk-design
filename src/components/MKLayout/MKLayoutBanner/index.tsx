import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutBannerStyled } from './style';

export interface MKLayoutBannerProps {
  children?: ReactNode;
}

export const MKLayoutBanner: FC<MKLayoutBannerProps> = ({ children }) => {
  const { theme, banner } = useContext(MKLayoutContext);

  return <MKLayoutBannerStyled className={clsx('mk-layout-banner', theme)}>{children || banner}</MKLayoutBannerStyled>;
};
