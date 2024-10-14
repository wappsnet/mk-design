import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutFooterStyled } from './style';

export interface MKLayoutFooterProps {
  children?: ReactNode;
}

export const MKLayoutFooter: FC<MKLayoutFooterProps> = ({ children }) => {
  const { design, footer } = useContext(MKLayoutContext);

  return <MKLayoutFooterStyled className={clsx('mk-layout-footer', design)}>{children || footer}</MKLayoutFooterStyled>;
};
