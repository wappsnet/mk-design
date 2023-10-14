import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { MKBreadcrumbItem } from '../MKBreadcrumbItem';
import './style.scss';

export interface MKBreadcrumbDataProps {
  label: ReactNode;
  active?: boolean;
}

export interface MKBreadcrumbWrapperProps {
  children?: ReactNode;
  className?: string;
  data?: MKBreadcrumbDataProps[];
  render?: (item: MKBreadcrumbDataProps, index: number) => ReactNode;
}

export const MKBreadcrumbWrapper: FC<MKBreadcrumbWrapperProps> = ({ children, render, data = [], className }) => (
  <ol aria-label="breadcrumbs" className={classNames('mk-breadcrumb', className)}>
    {data?.map((item, index) => {
      if (render) {
        return render(item, index);
      }

      return (
        <MKBreadcrumbItem key={index} active={item.active || index === data.length - 1}>
          {item.label}
        </MKBreadcrumbItem>
      );
    })}
    {children}
  </ol>
);
