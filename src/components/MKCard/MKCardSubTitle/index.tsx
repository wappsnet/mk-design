import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKCardSubtitleStyled } from './style';

export interface MQCardSubTitleProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardSubTitle: FC<MQCardSubTitleProps> = ({ className = '', children }) => (
  <MKCardSubtitleStyled data-testid="mk-card-subtitle" className={clsx(['mk-card__subtitle', className])}>
    {children}
  </MKCardSubtitleStyled>
);
