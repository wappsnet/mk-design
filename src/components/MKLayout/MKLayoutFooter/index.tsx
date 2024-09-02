import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKLayoutFooterStyled } from './style';

export interface MKLayoutFooterProps {
  children?: ReactNode;
}

export const MKLayoutFooter: FC<MKLayoutFooterProps> = ({ children }) => {
  const { theme, footer } = useContext(MKLayoutContext);

  return (
    <MKLayoutFooterStyled className={classNames('mk-layout-footer', theme)}>{children || footer}</MKLayoutFooterStyled>
  );
};
