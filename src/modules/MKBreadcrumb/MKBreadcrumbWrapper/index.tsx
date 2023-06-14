import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKBreadcrumbDataProps {
  label: string;
  link?: string;
  icon?: string;
  active?: boolean;
}

export interface MKBreadcrumbWrapperProps {
  children?: ReactNode;
  className?: string;
  data?: MKBreadcrumbDataProps[];
  render?: (item: MKBreadcrumbDataProps, index: number) => ReactNode;
}

const MKBreadcrumbWrapper: FC<MKBreadcrumbWrapperProps> = ({ children, render, data = [], className }) => (
  <div className={classNames('mk-breadcrumb', className)}>
    {!!data?.length && !!render ? data.map((item, index) => render(item, index)) : children}
  </div>
);

export default MKBreadcrumbWrapper;
