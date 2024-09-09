import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';
import { MKThemeVariants } from 'types';

import { MKMenuStyled } from './style';

type MKMenuWrapperProps = {
  theme?: MKThemeVariants;
  children?: ReactNode;
};

export const MKMenuWrapper: FC<MKMenuWrapperProps> = ({ theme = 'primary', children }) => (
  <MKMenuContext.Provider
    value={{
      theme,
    }}
  >
    <MKMenuStyled className={classNames('mk-menu', theme)}>{children}</MKMenuStyled>
  </MKMenuContext.Provider>
);
