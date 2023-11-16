import './style.scss';

import { FC, ReactNode } from 'react';

import { MKMenuContext } from 'definitions';
import { MKStyleVariants } from 'types';

type MKMenuWrapperProps = {
  variant: MKStyleVariants;
  children?: ReactNode;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ variant = 'primary', children }) => (
  <MKMenuContext.Provider
    value={{
      variant,
    }}
  >
    {children}
  </MKMenuContext.Provider>
);
