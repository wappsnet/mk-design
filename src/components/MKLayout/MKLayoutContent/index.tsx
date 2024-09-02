import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKLayoutContentStyled } from './style';

export interface MKLayoutContentProps {
  children?: ReactNode;
}

export const MKLayoutContent: FC<MKLayoutContentProps> = ({ children }) => {
  const { theme, expanded } = useContext(MKLayoutContext);

  return (
    <MKLayoutContentStyled className={classNames('mk-layout-content', theme, { expanded })}>
      {children}
    </MKLayoutContentStyled>
  );
};
