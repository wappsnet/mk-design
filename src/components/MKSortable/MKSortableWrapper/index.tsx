import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKSortableContext } from '../context';

import { MKSortableWrapperStyled } from './style';

export interface MQSortableWrapperProps {
  children?: ReactNode;
  className?: string;
  scrollable?: boolean;
}

export const MKSortableWrapper: FC<MQSortableWrapperProps> = ({ children, className, scrollable = false }) => {
  const { lockAxis = 'x' } = useContext(MKSortableContext);

  return (
    <MKSortableWrapperStyled
      mkLockedAxis={lockAxis}
      mkScrollable={scrollable}
      className={clsx('mq-sortable-wrapper', className, `mq-sortable-locked-${lockAxis}`)}
    >
      {children}
    </MKSortableWrapperStyled>
  );
};
