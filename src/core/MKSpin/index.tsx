import './style.scss';

import { FC } from 'react';

import classNames from 'classnames';

import { MKSizeTypes, MKStyleVariants } from 'types';

type MKSpinProps = {
  size: MKSizeTypes;
  design: MKStyleVariants;
  shape: 'border' | 'blow';
};

export const MKSpin: FC<MKSpinProps> = ({ size = 'sm', shape = 'border', design = 'primary' }) => (
  <div className={classNames('mk-spin', size, shape, design)} />
);
