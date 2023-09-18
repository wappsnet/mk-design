import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
};

const MKLayoutWrapper: FC<MKLayoutWrapperProps> = ({ children, className = '', orientation = 'vertical' }) => (
  <section className={classNames(['mk-layout', className, orientation])}>{children}</section>
);

export default MKLayoutWrapper;
