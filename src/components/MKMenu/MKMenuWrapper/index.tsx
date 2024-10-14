import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';
import { MKDesignVariants } from 'types';

import { MKMenuStyled } from './style';

type MKMenuWrapperProps = {
  design?: MKDesignVariants;
  children?: ReactNode;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ design = 'primary', children }) => (
  <MKMenuContext.Provider
    value={{
      design,
    }}
  >
    <MKMenuStyled className={clsx('mk-menu', design)}>{children}</MKMenuStyled>
  </MKMenuContext.Provider>
);
