import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

type MKGridBoxProps = {
  direction?: 'row' | 'column';
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  wrap?: boolean;
  children?: ReactNode;
};

export const MKGridBox: FC<MKGridBoxProps> = ({
  children,
  direction = 'row',
  wrap = false,
  align = '',
  justify = '',
}) => <div className={classNames(['mk-grid-box', align, justify, direction, { wrap }])}>{children}</div>;
