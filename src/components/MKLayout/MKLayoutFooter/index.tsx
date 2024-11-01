import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutFooterStyled } from './style';

export interface MKLayoutFooterProps {
  children?: ReactNode;
  className?: string;
}

export const MKLayoutFooter: FC<MKLayoutFooterProps> = ({ children, className = '' }) => {
  const { design, footer } = useContext(MKLayoutContext);

  return (
    <MKLayoutFooterStyled className={clsx('mk-layout-footer', className)} mkDesign={design}>
      {children || footer}
    </MKLayoutFooterStyled>
  );
};
