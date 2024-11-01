import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutBannerStyled } from './style';

export interface MKLayoutBannerProps {
  children?: ReactNode;
  className?: string;
}

export const MKLayoutBanner: FC<MKLayoutBannerProps> = ({ children, className }) => {
  const { design, banner } = useContext(MKLayoutContext);

  return (
    <MKLayoutBannerStyled className={clsx('mk-layout-banner', className)} mkDesign={design}>
      {children || banner}
    </MKLayoutBannerStyled>
  );
};
