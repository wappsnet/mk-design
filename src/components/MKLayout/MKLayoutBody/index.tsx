import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKLayoutBodyStyled } from './style';

export interface MKLayoutBodyProps {
  children?: ReactNode;
}

export const MKLayoutBody: FC<MKLayoutBodyProps> = ({ children }) => {
  const { theme } = useContext(MKLayoutContext);

  return <MKLayoutBodyStyled className={classNames('mk-layout-body', theme)}>{children}</MKLayoutBodyStyled>;
};
