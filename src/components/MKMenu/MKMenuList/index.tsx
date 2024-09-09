import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKOrientationVariants } from 'types';

import { MKMenuListStyled } from './style';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
  orientation?: MKOrientationVariants;
  borderless?: boolean;
  divided?: boolean;
};

export const MKMenuList: FC<MKMenuItemProps> = ({
  children,
  orientation = 'horizontal',
  className = '',
  borderless = true,
  divided = false,
}) => (
  <MKMenuListStyled
    className={classNames('mk-menu-list', className, orientation, { borderless, divided })}
    borderless={borderless}
    divided={divided}
    orientation={orientation}
  >
    {children}
  </MKMenuListStyled>
);
