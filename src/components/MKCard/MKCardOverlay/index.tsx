import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKCardContext } from 'context';

import { MKCardOverlayStyled } from './style';

export interface MKCardItemProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardOverlay: FC<MKCardItemProps> = ({ className = '', children }) => {
  const { design, compact } = useContext(MKCardContext);

  return (
    <MKCardOverlayStyled
      data-testid="mk-card-overlay"
      className={clsx(['mk-card__overlay', className])}
      design={design}
      compact={compact}
    >
      {children}
    </MKCardOverlayStyled>
  );
};
