import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKParagraphStyled } from './style';

export interface MKParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  truncate?: boolean;
}

export const MKParagraph: FC<MKParagraphProps> = ({
  children,
  underline = false,
  bold = false,
  italic = false,
  center = false,
  truncate = false,
  ...props
}) => (
  <MKParagraphStyled
    {...props}
    className={clsx(['mk-paragraph', { center, underline, truncate, italic, bold }])}
    bold={bold}
    center={center}
    italic={italic}
    underline={underline}
    truncate={truncate}
  >
    {children}
  </MKParagraphStyled>
);
