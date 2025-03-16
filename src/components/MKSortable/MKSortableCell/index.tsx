import { FC, HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKSortableCellStyled } from './style';
import { MKSortableCellTypes } from './type';

export interface MKSortableCellProps extends HTMLAttributes<HTMLDivElement> {
  type?: MKSortableCellTypes;
  className?: string;
  active?: boolean;
}

export const MKSortableCell: FC<MKSortableCellProps> = ({
  className = '',
  type = 'content',
  active = true,
  children,
}) => (
  <MKSortableCellStyled
    data-testid="mq-sortable-cell"
    mkType={type}
    mkActive={active}
    className={clsx(['mq-sortable__cell', className])}
  >
    {children}
  </MKSortableCellStyled>
);
