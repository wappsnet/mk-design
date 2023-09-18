import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

type MKGridRowProps = {
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'center' | 'end';
  wrap?: boolean;
  children?: ReactNode;
};

const MKGridWrapper: FC<MKGridRowProps> = ({ children, wrap = false, align = '', justify = '' }) => (
  <div className={classNames(['mk-grid-wrapper', align, justify, { wrap }])}>{children}</div>
);

export default MKGridWrapper;
