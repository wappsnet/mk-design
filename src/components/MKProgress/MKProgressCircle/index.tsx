import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKThemeVariants } from 'types';

import {
  MKProgressCircleBarStyled,
  MKProgressCircleLabelStyled,
  MKProgressCircleStyled,
  MKProgressCircleSvgStyled,
  MKProgressCircleTruckStyled,
} from './style';

type MKProgressCircleProps = {
  className?: string;
  theme?: MKThemeVariants;
  format?: (percent: number) => ReactNode;
  size?: number;
  stroke?: number;
  percent?: number;
};

export const MKProgressCircle: FC<MKProgressCircleProps> = ({
  className = '',
  size = 100,
  stroke = 10,
  percent = 0,
  theme = 'primary',
  format,
}) => (
  <MKProgressCircleStyled className={clsx('mk-progress-circle', className, theme, size)} theme={theme}>
    <MKProgressCircleSvgStyled
      className="mk-progress-circle__svg"
      width={size}
      height={size}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MKProgressCircleTruckStyled
        className="mk-progress-circle__truck"
        r={(size - stroke) / 2}
        cx={size / 2}
        cy={size / 2}
        fill="transparent"
        strokeDasharray={(size - stroke) * Math.PI}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <MKProgressCircleBarStyled
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
    </MKProgressCircleSvgStyled>
    {format && (
      <MKProgressCircleLabelStyled className="mk-progress-circle__label">{format(percent)}</MKProgressCircleLabelStyled>
    )}
  </MKProgressCircleStyled>
);
