import './style.scss';

import { FC, HTMLAttributes } from 'react';

import classNames from 'classnames';

export interface MKParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
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
}) => (
  <p className={classNames(['mk-paragraph', { center }, { underline }, { truncate }, { italic }, { bold }])}>
    {children}
  </p>
);
