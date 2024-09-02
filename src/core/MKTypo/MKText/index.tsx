import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import { MKSizeXTypes, MKThemeVariants } from 'types';

import { MKTextStyled } from './style';

export interface MKTextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  underline?: boolean;
  center?: boolean;
  bold?: boolean;
  truncate?: boolean;
  italic?: boolean;
  size?: MKSizeXTypes;
  theme?: MKThemeVariants;
}

export const MKText: FC<MKTextProps> = ({
  children,
  truncate = false,
  center = false,
  bold = false,
  italic = false,
  underline = false,
  size = '2x',
  theme = 'neutral',
  ...props
}) => (
  <MKTextStyled
    className={classNames(['mk-text', `size-${size}`, theme, { italic, truncate, underline, center, bold }])}
    bold
    center
    italic
    underline
    truncate
    theme={theme}
    size={size}
    {...props}
  >
    {children}
  </MKTextStyled>
);
