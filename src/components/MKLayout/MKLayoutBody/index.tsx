import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutBodyStyled } from './style';

export interface MKLayoutBodyProps {
  children?: ReactNode;
  className?: string;
}

export const MKLayoutBody: FC<MKLayoutBodyProps> = ({ children, className = '' }) => {
  const { design } = useContext(MKLayoutContext);

  return (
    <MKLayoutBodyStyled className={clsx('mk-layout-body', className)} mkDesign={design}>
      {children}
    </MKLayoutBodyStyled>
  );
};
