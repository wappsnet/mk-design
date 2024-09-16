import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutBodyStyled } from './style';

export interface MKLayoutBodyProps {
  children?: ReactNode;
}

export const MKLayoutBody: FC<MKLayoutBodyProps> = ({ children }) => {
  const { theme } = useContext(MKLayoutContext);

  return <MKLayoutBodyStyled className={clsx('mk-layout-body', theme)}>{children}</MKLayoutBodyStyled>;
};
