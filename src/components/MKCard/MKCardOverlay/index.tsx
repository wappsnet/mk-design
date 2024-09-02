import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKCardContext } from 'context';

import { MKCardOverlayStyled } from './style';

export interface MKCardItemProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardOverlay: FC<MKCardItemProps> = ({ className = '', children }) => {
  const { theme, compact } = useContext(MKCardContext);

  return (
    <MKCardOverlayStyled
      data-testid="mk-card-overlay"
      className={classNames(['mk-card__overlay', className])}
      theme={theme}
      compact={compact}
    >
      {children}
    </MKCardOverlayStyled>
  );
};
