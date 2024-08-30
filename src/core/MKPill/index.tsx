import { FC, ReactNode, useMemo } from 'react';

import { isNumber } from 'lodash';

import { MKShapeVariants, MKSizeTypes, MKStyleVariants } from 'types';

import { getRandomWidth } from './helpers';
import { MQLoaderSkeletonStyled } from './style';

export interface MKPillProps {
  loading?: boolean;
  shape?: MKShapeVariants;
  design?: MKStyleVariants;
  base?: number;
  speed?: 'static' | 'slow' | 'fast';
  pulse?: MKSizeTypes;
  height: number | `${number}x`;
  width?: number | `${number}%`;
  random?: boolean;
  children?: ReactNode;
}

export const MKPill: FC<MKPillProps> = ({
  loading,
  base = 0.25,
  shape = 'square',
  design = 'neutral',
  speed = 'slow',
  pulse = 'sm',
  height = '1x',
  width,
  random,
  children,
}) => {
  const calculatedWidth = useMemo(() => (random ? getRandomWidth(width) : width), [random, width]);
  const calculatedHeight = useMemo(() => {
    if (isNumber(height)) {
      return height;
    }
    return `${parseInt(height) * base}rem`;
  }, [base, height]);

  if (loading || !children) {
    return (
      <MQLoaderSkeletonStyled
        className="mq-loader-skeleton"
        shape={shape}
        design={design}
        pulse={pulse}
        speed={speed}
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
