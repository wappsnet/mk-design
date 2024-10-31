import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSliderItemStyled } from './style';

export interface MKSliderItemProps {
  children?: ReactNode;
  slideIndex: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: (index: number) => void;
  onFocus?: (index: number) => void;
  width?: number;
  className?: string;
}

export const MKSliderItem: FC<MKSliderItemProps> = ({
  children,
  active = false,
  disabled = false,
  slideIndex,
  onClick,
  onFocus,
  width,
  className,
}) => (
  <MKSliderItemStyled
    style={{ width: width }}
    data-index={slideIndex}
    className={clsx('mk-slider-item', { disabled, active }, className)}
    onClick={() => {
      if (!disabled && !active) {
        onClick?.(slideIndex);
      }
    }}
    onFocus={() => {
      if (!disabled) {
        onFocus?.(slideIndex);
      }
    }}
    mkDisabled={disabled}
  >
    {children}
  </MKSliderItemStyled>
);
