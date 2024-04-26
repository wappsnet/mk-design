import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { keyGen } from 'helpers';

import { MKBreadcrumbItem } from '../MKBreadcrumbItem';

import { MKBreadcrumbStyled } from './style';

export interface MKBreadcrumbDataProps {
  label: ReactNode;
  active?: boolean;
}

interface MKBreadcrumbRenderProps {
  data: MKBreadcrumbDataProps;
  index: number;
  key: string | number;
}

export interface MKBreadcrumbWrapperProps {
  children?: ReactNode;
  className?: string;
  data?: MKBreadcrumbDataProps[];
  render?: (props: MKBreadcrumbRenderProps) => ReactNode;
}

export const MKBreadcrumbWrapper: FC<MKBreadcrumbWrapperProps> = ({ children, render, data = [], className }) => (
  <MKBreadcrumbStyled aria-label="breadcrumbs" className={classNames('mk-breadcrumb', className)}>
    {keyGen(data).map(({ item, key }, index) => {
      if (render) {
        return render({
          data: item,
          key,
          index,
        });
      }

      return (
        <MKBreadcrumbItem key={key} active={item.active || index === data.length - 1}>
          {item.label}
        </MKBreadcrumbItem>
      );
    })}
    {children}
  </MKBreadcrumbStyled>
);
