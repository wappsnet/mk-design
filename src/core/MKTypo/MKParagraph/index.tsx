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
  className?: string;
}

export const MKParagraph: FC<MKParagraphProps> = ({
  children,
  underline = false,
  bold = false,
  italic = false,
  center = false,
  truncate = false,
  className = '',
  ...props
}) => (
  <MKParagraphStyled
    {...props}
    className={clsx(['mk-paragraph', className])}
    mkBold={bold}
    mkCentered={center}
    mkItalic={italic}
    mkUnderline={underline}
    mkTruncate={truncate}
  >
    {children}
  </MKParagraphStyled>
);
