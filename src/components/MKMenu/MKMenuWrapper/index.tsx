import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';
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
    <div className={classNames('mk-menu', design)}>{children}</div>
  </MKMenuContext.Provider>
);
