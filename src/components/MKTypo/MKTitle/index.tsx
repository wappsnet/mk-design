import { FC, HTMLAttributes } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKTitleProps extends HTMLAttributes<HTMLTitleElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
}) => {
  const Tag = type;
  return (
    <Tag className={classNames(['mk-title', type, { center }, { underline }, { italic }, { bold }, { truncate }])}>
      {children}
    </Tag>
  );
};
