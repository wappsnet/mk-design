import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSortableSectionStyled } from './style';

export interface MKSortableSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MKSortableSection: FC<MKSortableSectionProps> = ({ className = '', children }) => (
  <MKSortableSectionStyled data-testid="mk-sortable-section" className={clsx(['mk-sortable__section', className])}>
    {children}
  </MKSortableSectionStyled>
);
