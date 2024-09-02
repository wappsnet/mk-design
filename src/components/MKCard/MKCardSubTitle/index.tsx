import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKCardSubtitleStyled } from './style';

export interface MQCardSubTitleProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardSubTitle: FC<MQCardSubTitleProps> = ({ className = '', children }) => (
  <MKCardSubtitleStyled data-testid="mk-card-subtitle" className={classNames(['mk-card__subtitle', className])}>
    {children}
  </MKCardSubtitleStyled>
);
