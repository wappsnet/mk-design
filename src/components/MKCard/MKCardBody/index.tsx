import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKCardContext } from 'context';

import { MKCardBodyStyled } from './style';

export interface MKCardBodyProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardBody: FC<MKCardBodyProps> = ({ className = '', children }) => {
  const { compact } = useContext(MKCardContext);
  return (
    <MKCardBodyStyled data-testid="mk-card-body" className={clsx(['mk-card-body', className])} mkCompact={compact}>
      {children}
    </MKCardBodyStyled>
  );
};
