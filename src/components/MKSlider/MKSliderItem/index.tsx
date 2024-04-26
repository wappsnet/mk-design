import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

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
  <div
    style={{ width: width }}
    data-index={slideIndex}
    className={classNames('mk-slider-item', { disabled, active }, className)}
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
  >
    {children}
  </div>
);
