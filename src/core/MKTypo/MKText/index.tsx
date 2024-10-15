import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSizeXTypes, MKDesignTypes } from 'types';

import { MKTextStyled } from './style';

export interface MKTextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  underline?: boolean;
  center?: boolean;
  bold?: boolean;
  truncate?: boolean;
  italic?: boolean;
  size?: MKSizeXTypes;
  design?: MKDesignTypes;
}

export const MKText: FC<MKTextProps> = ({
  children,
  truncate = false,
  center = false,
  bold = false,
  italic = false,
  underline = false,
  size = '2x',
  design = 'neutral',
  ...props
}) => (
  <MKTextStyled
    className={clsx(['mk-text', `size-${size}`, design, { italic, truncate, underline, center, bold }])}
    bold={bold}
    center={center}
    italic={italic}
    underline={underline}
    truncate={truncate}
    design={design}
    size={size}
    {...props}
  >
    {children}
  </MKTextStyled>
);
