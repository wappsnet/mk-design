import './style.scss';

import { FC, HTMLAttributes } from 'react';

import classNames from 'classnames';

export interface MKCaptionProps extends HTMLAttributes<HTMLParagraphElement> {
  underline?: boolean;
  center?: boolean;
  bold?: boolean;
  truncate?: boolean;
  italic?: boolean;
  size?: '0x' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | string;
}

export const MKText: FC<MKCaptionProps> = ({
  children,
  truncate = false,
  center = false,
  bold = false,
  italic = false,
  underline = false,
  size = '2x',
}) => (
  <span className={classNames(['mk-text', `size-${size}`, { italic, truncate, underline, center, bold }])}>
    {children}
  </span>
);
