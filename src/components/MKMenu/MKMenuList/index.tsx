import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKOrientationVariants } from 'types';

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
}) => <ul className={classNames('mk-menu-list', className, orientation, { borderless, divided })}>{children}</ul>;
