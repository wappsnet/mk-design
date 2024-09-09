import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKGridBoxProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  wrap?: boolean;
  children?: ReactNode;
}

export const MKGridBox: FC<MKGridBoxProps> = ({
  children,
  direction = 'row',
  wrap = false,
  align = '',
  justify = '',
  ...props
}) => (
  <div {...props} className={classNames(['mk-grid-box', align, justify, direction, { wrap }])}>
    {children}
  </div>
);
