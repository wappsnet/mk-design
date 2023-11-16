import './style.scss';

import { FC } from 'react';

import classNames from 'classnames';

import { MKSizeTypes, MKStyleVariants } from 'types';

type MKSpinProps = {
  size: MKSizeTypes;
  variant: MKStyleVariants;
  shape: 'border' | 'blow';
};

export const MKSpin: FC<MKSpinProps> = ({ size = 'sm', shape = 'border', variant = 'primary' }) => (
  <div className={classNames('mk-spin', size, shape, variant)} />
);
