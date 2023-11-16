import { FC, HTMLAttributes } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKCaptionProps extends HTMLAttributes<HTMLParagraphElement> {
  underline?: boolean;
  center?: boolean;
  bold?: boolean;
}

export const MKCaption: FC<MKCaptionProps> = ({ children, center = false, bold = false, underline = false }) => (
  <p className={classNames(['mk-caption', { underline }, { center }, { bold }])}>{children}</p>
);
