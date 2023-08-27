import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKCaptionProps extends HTMLAttributes<HTMLParagraphElement> {
  underline?: boolean;
}

const MKCaption: FC<MKCaptionProps> = ({ children, underline = false }) => (
  <p className={classNames(['mk-caption', { underline }])}>{children}</p>
);

export default MKCaption;
