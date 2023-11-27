import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
};

export const MKLayoutWrapper: FC<MKLayoutWrapperProps> = ({ children, className = '', orientation = 'vertical' }) => (
  <section className={classNames(['mk-layout', className, orientation])}>{children}</section>
);
