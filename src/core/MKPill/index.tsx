import './style.scss';

import { FC, ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { MKShapeVariants, MKSizeTypes, MKStyleVariants } from 'types';

import { getRandomWidth } from './helpers';

export interface MKPillProps {
  loading?: boolean;
  shape: MKShapeVariants;
  design?: MKStyleVariants;
  base?: number;
  animationSpeed?: 'static' | 'slow' | 'fast';
  opacityRange?: MKSizeTypes;
  height:
    | number
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | '11x'
    | '12x'
    | '13x'
    | '14x'
    | '15x'
    | '16x'
    | '17x'
    | '18x';
  width?: number | `${number}%`;
  random?: boolean;
  children?: ReactNode;
}

export const MKPill: FC<MKPillProps> = ({
  loading,
  base = 0.25,
  shape,
  design = 'neutral',
  animationSpeed = 'slow',
  opacityRange = 'sm',
  height,
  width,
  random,
  children,
}) => {
  const calculatedWidth = useMemo(() => (random ? getRandomWidth(width) : width), [random, width]);
  const calculatedHeight = useMemo(
    () => (typeof height === 'string' ? `${parseInt(height) * base}rem` : height),
    [base, height],
  );

  if (loading || !children) {
    return (
      <div
        className={classNames('mq-loader-skeleton', shape, design, animationSpeed, opacityRange)}
        style={{
          height: calculatedHeight,
          width: calculatedWidth,
        }}
      />
    );
  }

  return <>{children}</>;
};

export default MKPill;
