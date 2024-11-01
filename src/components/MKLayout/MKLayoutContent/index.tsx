import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKLayoutContentStyled } from './style';

export interface MKLayoutContentProps {
  children?: ReactNode;
  className?: string;
}

export const MKLayoutContent: FC<MKLayoutContentProps> = ({ children, className = '' }) => {
  const { design, expanded } = useContext(MKLayoutContext);

  return (
    <MKLayoutContentStyled className={clsx('mk-layout-content', className)} mkDesign={design} mkExpanded={!!expanded}>
      {children}
    </MKLayoutContentStyled>
  );
};
