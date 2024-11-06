import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKOrientationTypes } from 'types';

import { MKMenuListStyled } from './style';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
  orientation?: MKOrientationTypes;
  borderless?: boolean;
  divided?: boolean;
};

export const MKMenuList: FC<MKMenuItemProps> = ({
  children,
  orientation = 'horizontal',
  className = '',
  borderless = false,
  divided = false,
}) => (
  <MKMenuListStyled
    className={clsx('mk-menu-list', className)}
    mkBorderless={borderless}
    mkDivided={divided}
    mkOrientation={orientation}
  >
    {children}
  </MKMenuListStyled>
);
