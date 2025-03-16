import { cloneElement, FC, useContext, useMemo, MouseEvent, HTMLAttributes, ReactElement } from 'react';

import { getEventTarget } from 'helpers';

import { MKSortableContext } from '../context';
import { MKSortableChildProps } from '../types';

export interface MKSortableItemProps extends HTMLAttributes<HTMLElement> {
  index: number;
  collection?: number | string | null;
  className?: string;
  isSorting?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  sortable?: boolean;
  children?: ReactElement<MKSortableChildProps> | false;
  lock?: 'x' | 'y';
  dnd?: string;
}

export const MKSortableItem: FC<MKSortableItemProps> = ({
  sortable = false,
  disabled = false,
  index,
  collection,
  children,
  lock,
  dnd,
}) => {
  const { draggable, setDraggable, setDroppable, lockAxis } = useContext(MKSortableContext);

  const locked = useMemo(() => lock || lockAxis || 'x', [lock, lockAxis]);

  if (children) {
    return cloneElement(children, {
      ...children.props,
      'data-draggable':
        (!draggable?.group || collection === draggable.group) &&
        (!draggable?.dnd || dnd === draggable.dnd) &&
        index === draggable?.index,
      'data-group': collection,
      'data-index': index,
      onMouseDown: (event: MouseEvent) => {
        if (sortable && !disabled && !event.button) {
          const handler = event.currentTarget?.querySelector('[data-handler="true"]');
          const target = getEventTarget(event.target);

          if (target) {
            const enabled = handler?.contains(target);

            if (enabled) {
              event.stopPropagation();
              const rect = event.currentTarget.getBoundingClientRect();
              setDraggable?.({
                index,
                group: collection ?? null,
                node: children,
                html: event.currentTarget.outerHTML,
                width: event.currentTarget.clientWidth,
                height: event.currentTarget.clientHeight,
                x: event.clientX,
                y: event.clientY,
                offsetX: event.clientX - rect.left,
                offsetY: event.clientY - rect.top,
                dnd,
              });
              setDroppable?.({
                index,
                group: collection ?? null,
              });
            }
          }
        }

        children.props?.onMouseDown?.(event);
      },
      onMouseEnter: (event: MouseEvent) => {
        if (!!draggable && !disabled) {
          if (draggable.dnd === dnd) {
            if (locked === 'x') {
              setDroppable?.({
                group: collection ?? null,
                index: index ?? 0,
              });
            } else if (locked === 'y') {
              setDroppable?.({
                group: collection ?? null,
                index: index ?? 0,
              });
            }
          }
        }

        children.props.onMouseMove?.(event);
      },
    });
  }

  return null;
};
