import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutContentStyled } from './style';

export interface MKLayoutContentProps {
  children?: ReactNode;
}

export const MKLayoutContent: FC<MKLayoutContentProps> = ({ children }) => {
  const { design, expanded } = useContext(MKLayoutContext);

  return (
    <MKLayoutContentStyled className={clsx('mk-layout-content', design, { expanded })}>
      {children}
    </MKLayoutContentStyled>
  );
};
