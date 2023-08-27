import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { MKStyleVariants } from 'types';

import './style.scss';

type MKProgressCircleProps = {
  className?: string;
  variant?: MKStyleVariants;
  format?: (percent: number) => ReactNode;
  size?: number;
  stroke?: number;
  percent?: number;
};

const MKProgressCircle: FC<MKProgressCircleProps> = ({
  className = '',
  size = 100,
  stroke = 10,
  percent = 0,
  variant = 'primary',
  format,
}) => (
  <div className={classNames('mk-progress-circle', className, variant, size)}>
    <svg
      className="mk-progress-circle__svg"
      width={size}
      height={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="mk-progress-circle__truck"
        r={(size - stroke) / 2}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        strokeDasharray={(size - stroke) * Math.PI}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <circle
        className="mk-progress-circle__bar"
        strokeDasharray={(size - stroke) * Math.PI}
        r={(size - stroke) / 2}
        cx={size / 2}
        cy={size / 2}
        strokeWidth={stroke}
        fill="transparent"
        strokeLinecap="round"
        strokeDashoffset={((100 - percent) / 100) * Math.PI * (((size - stroke) / 2) * 2)}
      />
    </svg>
    {format && <div className="mk-progress-circle__label">{format(percent)}</div>}
  </div>
);

export default MKProgressCircle;
