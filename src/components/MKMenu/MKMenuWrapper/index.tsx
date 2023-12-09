import './style.scss';

import { FC, ReactNode } from 'react';

import { MKMenuContext } from 'definitions';
import { MKStyleVariants } from 'types';

type MKMenuWrapperProps = {
  design: MKStyleVariants;
  children?: ReactNode;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ design = 'primary', children }) => (
  <MKMenuContext.Provider
    value={{
      design,
    }}
  >
    {children}
  </MKMenuContext.Provider>
);
