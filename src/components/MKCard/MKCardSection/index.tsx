import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKCardSectionStyled } from './style';

export interface MKCardSectionProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardSection: FC<MKCardSectionProps> = ({ className = '', children, ...props }) => (
  <MKCardSectionStyled data-testid="mk-card-section" className={clsx(['mk-card__section', className])} {...props}>
    {children}
  </MKCardSectionStyled>
);
