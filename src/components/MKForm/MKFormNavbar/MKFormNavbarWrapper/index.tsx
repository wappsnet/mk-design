import './style.scss';

import { FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKThemeVariants } from 'types';

import { MKFormNavbarSection } from '../MKFormNavbarSection';

interface MKFormNavbarItemProps {
  align: 'start' | 'end';
  node: ReactNode;
}

export interface MKFormNavbarWrapperProps {
  children?: ReactNode;
  className?: string;
  data?: MKFormNavbarItemProps[];
  theme?: MKThemeVariants;
}

export const MKFormNavbarWrapper: FC<MKFormNavbarWrapperProps> = ({
  className = '',
  theme = 'tertiary',
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
    <div className={clsx('mk-form-navbar', theme, className)}>
      {!!items.start.length && <MKFormNavbarSection align="start">{items.start}</MKFormNavbarSection>}
      {children}
      {!!items.end.length && <MKFormNavbarSection align="start">{items.end}</MKFormNavbarSection>}
    </div>
  );
};

export default MKFormNavbarWrapper;
