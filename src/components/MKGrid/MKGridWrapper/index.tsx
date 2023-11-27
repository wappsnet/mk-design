import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

type MKGridWrapperProps = {
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  wrap?: boolean;
  children?: ReactNode;
};

export const MKGridWrapper: FC<MKGridWrapperProps> = ({ children, wrap = false, align = '', justify = '' }) => (
  <div className={classNames(['mk-grid-wrapper', align, justify, { wrap }])}>{children}</div>
);
