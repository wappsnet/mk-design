import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './style.scss';

interface MKTitleProps extends HTMLAttributes<HTMLTitleElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

const MKTitle: FC<MKTitleProps> = ({
  children,
  type = 'h1',
  underline = false,
  bold = false,
  italic = false,
  center = false,
}) => {
  const Tag = type;
  return (
    <Tag className={classNames(['mk-title', type, { center }, { underline }, { italic }, { bold }])}>{children}</Tag>
  );
};

export default MKTitle;
