import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';
import { MKThemeVariants } from 'types';

type MKMenuWrapperProps = {
  theme: MKThemeVariants;
  children?: ReactNode;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ theme = 'primary', children }) => (
  <MKMenuContext.Provider
    value={{
      theme,
    }}
  >
    <div className={classNames('mk-menu', theme)}>{children}</div>
  </MKMenuContext.Provider>
);
