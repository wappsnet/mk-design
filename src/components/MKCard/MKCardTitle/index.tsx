import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKCardTitleStyled } from './style';

export interface MQCardTitleProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardTitle: FC<MQCardTitleProps> = ({ className = '', children }) => (
  <MKCardTitleStyled data-testid="mk-card-title" className={classNames(['mk-card__title', className])}>
    {children}
  </MKCardTitleStyled>
);
