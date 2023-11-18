import './style.scss';

import { FC } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

export interface MKLayoutDividerProps {
  style?: MKStyleVariants;
}

export const MKLayoutDivider: FC<MKLayoutDividerProps> = ({ style = 'primary' }) => (
  <hr className={classNames('mk-layout-divider', style)} />
);
