import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSizeTypes, MKDesignVariants } from 'types';

import {
  MKProgressBarInnerStyled,
  MKProgressBarLabelStyled,
  MKProgressBarStyled,
  MKProgressBarThumbStyled,
} from './style';

type MKProgressBarProps = {
  className?: string;
  design?: MKDesignVariants;
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
  <MKProgressBarStyled className={clsx('mk-progress-bar', className, design, size)} design={design} size={size}>
    <MKProgressBarInnerStyled className="mk-progress-bar__inner">
      <MKProgressBarThumbStyled className="mk-progress-bar__thumb" percent={percent} />
    </MKProgressBarInnerStyled>
    {format && (
      <MKProgressBarLabelStyled className="mk-progress-bar__label">{format(percent)}</MKProgressBarLabelStyled>
    )}
  </MKProgressBarStyled>
);
