import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKActionBarContext } from 'context';
import { MKDesignTypes } from 'types';

import { MKActionBarWrapperStyled } from './style';

export interface MKActionBarWrapperProps {
  children?: ReactNode;
  className?: string;
  design?: MKDesignTypes;
}

export const MKActionBarWrapper: FC<MKActionBarWrapperProps> = ({ className = '', design = 'tertiary', children }) => (
  <MKActionBarContext.Provider
    value={{
      design,
    }}
  >
    <MKActionBarWrapperStyled className={clsx('mk-action-bar', design, className)}>{children}</MKActionBarWrapperStyled>
  </MKActionBarContext.Provider>
);
