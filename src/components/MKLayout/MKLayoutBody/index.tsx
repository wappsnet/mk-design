import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutBodyStyled } from './style';

export interface MKLayoutBodyProps {
  children?: ReactNode;
}

export const MKLayoutBody: FC<MKLayoutBodyProps> = ({ children }) => {
  const { design } = useContext(MKLayoutContext);

  return <MKLayoutBodyStyled className={clsx('mk-layout-body', design)}>{children}</MKLayoutBodyStyled>;
};
