import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

type MKLayoutSectionProps = {
  children?: ReactNode;
  className?: string;
  type?: 'header' | 'content' | 'footer';
};

export const MKLayoutSection: FC<MKLayoutSectionProps> = ({ children, className = '', type = 'content' }) => (
  <section className={classNames(['mk-layout__section', className, type])}>{children}</section>
);
