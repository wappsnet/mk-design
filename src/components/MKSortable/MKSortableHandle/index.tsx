import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKSortableHandleStyled } from './style';

export interface MKSortableHandleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  disabled?: boolean;
  compact?: boolean;
}

export const MKSortableHandle: FC<MKSortableHandleProps> = ({
  className = '',
  disabled = false,
  compact = false,
  children,
  ...props
}) => (
  <MKSortableHandleStyled
    className={clsx(['mk-sortable-handle', className])}
    data-handler={!disabled}
    mkDisabled={disabled}
    mkCompact={compact}
    {...props}
  >
    {children}
  </MKSortableHandleStyled>
);
