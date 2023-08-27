import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

const MKParagraph: FC<MKParagraphProps> = ({
  children,
  underline = false,
  bold = false,
  italic = false,
  center = false,
}) => <p className={classNames(['mk-paragraph', { center }, { underline }, { italic }, { bold }])}>{children}</p>;

export default MKParagraph;
