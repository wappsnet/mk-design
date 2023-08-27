import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { MKSizeTypes, MKStyleVariants } from 'types';

import './style.scss';

type MKProgressBarProps = {
  className?: string;
  variant?: MKStyleVariants;
  format?: (percent: number) => ReactNode;
  size?: MKSizeTypes;
  percent?: number;
};

const MKProgressBar: FC<MKProgressBarProps> = ({
  className = '',
  percent = 0,
  variant = 'primary',
  size = 'md',
  format,
}) => (
  <div className={classNames('mk-progress-bar', className, variant, size)}>
    <div className="mk-progress-bar__inner">
      <div className="mk-progress-bar__thumb" style={{ width: `${percent}%` }} />
    </div>
    {format && <div className="mk-progress-bar__label">{format(percent)}</div>}
  </div>
);

export default MKProgressBar;
