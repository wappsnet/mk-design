import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKActionBarContext } from 'context';
import { MKJustifyTypes } from 'types';

import { MKActionBarSectionStyled } from './style';

export interface MKActionBarSectionProps {
  children: ReactNode;
  className?: string;
  justify?: MKJustifyTypes;
}

export const MKActionBarSection: FC<MKActionBarSectionProps> = ({ className = '', children, justify = 'end' }) => {
  const { theme } = useContext(MKActionBarContext);
  return (
    <MKActionBarSectionStyled
      className={clsx('mk-action-bar-section', className, justify, theme)}
      theme={theme}
      justify={justify}
    >
      {children}
    </MKActionBarSectionStyled>
  );
};
