import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKSortableContext } from '../context';

import {
  MKSortableRowBodyStyled,
  MKSortableRowGestureStyled,
  MKSortableRowHandleStyled,
  MKSortableRowStyled,
  MKSortableRowWrapperStyled,
} from './style';

export interface MKSortableRowProps {
  className?: string;
  isSorting?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  sortable?: boolean;
  empty?: boolean;
  hidden?: boolean;
  handle?: ReactNode;
  id?: string;
  gesture?: boolean;
  children?: ReactNode;
}

export const MKSortableRow: FC<MKSortableRowProps> = ({
  className = '',
  sortable = true,
  isSorting = false,
  isActive = false,
  disabled = false,
  empty = false,
  hidden = false,
  gesture = true,
  children,
  handle,
  id,
  ...props
}) => {
  const { draggable } = useContext(MKSortableContext);

  return (
    <MKSortableRowStyled
      {...props}
      mkSorting={isSorting || !!draggable}
      mkSortable={sortable}
      mkActive={isActive}
      mkEmpty={empty}
      mkHidden={hidden}
      mkDisabled={disabled}
      className={clsx([
        'mk-sortable__row',
        className,
        {
          disabled,
          hidden,
          handleable: !!handle,
        },
      ])}
      id={id}
    >
      {gesture && <MKSortableRowGestureStyled className="mk-sortable__row-gesture" />}
      {children && (
        <MKSortableRowBodyStyled className="mk-sortable__row-body">
          <MKSortableRowHandleStyled data-sortable-tool="handle" className="mk-sortable-row__handle">
            {handle}
          </MKSortableRowHandleStyled>
          <MKSortableRowWrapperStyled className="mk-sortable__row-wrapper">{children}</MKSortableRowWrapperStyled>
        </MKSortableRowBodyStyled>
      )}
    </MKSortableRowStyled>
  );
};
