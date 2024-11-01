import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';
import { MKDesignTypes } from 'types';

import { MKMenuStyled } from './style';

type MKMenuWrapperProps = {
  design?: MKDesignTypes;
  children?: ReactNode;
  className?: string;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ design = 'primary', className = '', children }) => (
  <MKMenuContext.Provider
    value={{
      design,
    }}
  >
    <MKMenuStyled className={clsx('mk-menu', className)}>{children}</MKMenuStyled>
  </MKMenuContext.Provider>
);
