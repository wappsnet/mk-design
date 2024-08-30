import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

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
    className={classNames(['mk-paragraph', { center, underline, truncate, italic, bold }])}
    bold
    center
    italic
    underline
    truncate
  >
    {children}
  </MKParagraphStyled>
);
