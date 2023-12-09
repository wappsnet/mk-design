import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKSizeTypes, MKStyleVariants } from 'types';

type MKProgressBarProps = {
  className?: string;
  design?: MKStyleVariants;
  format?: (percent: number) => ReactNode;
  size?: MKSizeTypes;
  percent?: number;
};

export const MKProgressBar: FC<MKProgressBarProps> = ({
  className = '',
  percent = 0,
  design = 'primary',
  size = 'md',
  format,
}) => (
  <div className={classNames('mk-progress-bar', className, design, size)}>
    <div className="mk-progress-bar__inner">
      <div className="mk-progress-bar__thumb" style={{ width: `${percent}%` }} />
    </div>
    {format && <div className="mk-progress-bar__label">{format(percent)}</div>}
  </div>
);
