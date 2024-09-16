import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKHeadingTypes } from 'types';

import { MKTitleStyled } from './style';

export interface MKTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  type?: MKHeadingTypes;
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  truncate?: boolean;
}

export const MKTitle: FC<MKTitleProps> = ({
  children,
  type = 'h1',
  underline = false,
  bold = false,
  italic = false,
  center = false,
  truncate = false,
  ...props
}) => (
  <MKTitleStyled
    as={type}
    {...props}
    className={clsx(['mk-title', type, { center, underline, italic, bold, truncate }])}
    tag={type}
    bold={bold}
    center={center}
    italic={italic}
    underline={underline}
    truncate={truncate}
  >
    {children}
  </MKTitleStyled>
);
