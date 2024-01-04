import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKOrientationVariants } from 'types';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
  orientation?: MKOrientationVariants;
};

export const MKMenuList: FC<MKMenuItemProps> = ({ children, orientation = 'horizontal', className = '' }) => (
  <ul className={classNames('mk-menu-list', className, orientation)}>{children}</ul>
);
