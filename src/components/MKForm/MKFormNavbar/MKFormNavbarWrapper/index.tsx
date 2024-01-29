import './style.scss';

import { FC, ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

import { MKFormNavbarSection } from '../MKFormNavbarSection';

interface MKFormNavbarItemProps {
  align: 'start' | 'end';
  node: ReactNode;
}

export interface MKFormNavbarWrapperProps {
  children?: ReactNode;
  className?: string;
  data?: MKFormNavbarItemProps[];
  design?: MKStyleVariants;
}

export const MKFormNavbarWrapper: FC<MKFormNavbarWrapperProps> = ({
  className = '',
  design = 'tertiary',
  children,
  data = [],
}) => {
  const items = useMemo(
    () => ({
      start: data.filter((item) => item.align === 'start').map(({ node }) => node),
      end: data.filter((item) => item.align === 'end').map(({ node }) => node),
    }),
    [data],
  );

  return (
    <div className={classNames('mk-form-navbar', design, className)}>
      {!!items.start.length && <MKFormNavbarSection align="start">{items.start}</MKFormNavbarSection>}
      {children}
      {!!items.end.length && <MKFormNavbarSection align="start">{items.end}</MKFormNavbarSection>}
    </div>
  );
};

export default MKFormNavbarWrapper;
