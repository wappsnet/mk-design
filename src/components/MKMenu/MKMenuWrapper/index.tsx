import { FC, ReactNode } from 'react';

import { MKStyleVariants } from 'types';
import { MKMenuContext } from 'definitions';
import './style.scss';

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
