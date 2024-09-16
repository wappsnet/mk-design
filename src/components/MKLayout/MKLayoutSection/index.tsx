import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSectionTypes } from 'types';

import { MKLayoutSectionStyled } from './style';

type MKLayoutSectionProps = {
  children?: ReactNode;
  className?: string;
  type?: MKSectionTypes;
};

export const MKLayoutSection: FC<MKLayoutSectionProps> = ({ children, className = '', type = 'content' }) => (
  <MKLayoutSectionStyled className={clsx(['mk-layout__section', className, type])} type={type}>
    {children}
  </MKLayoutSectionStyled>
);
