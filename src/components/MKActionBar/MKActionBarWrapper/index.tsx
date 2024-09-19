import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKActionBarContext } from 'context';
import { MKThemeVariants } from 'types';

import { MKActionBarWrapperStyled } from './style';

export interface MKActionBarWrapperProps {
  children?: ReactNode;
  className?: string;
  theme?: MKThemeVariants;
}

export const MKActionBarWrapper: FC<MKActionBarWrapperProps> = ({ className = '', theme = 'tertiary', children }) => (
  <MKActionBarContext.Provider
    value={{
      theme,
    }}
  >
    <MKActionBarWrapperStyled className={clsx('mk-action-bar', theme, className)}>{children}</MKActionBarWrapperStyled>
  </MKActionBarContext.Provider>
);
