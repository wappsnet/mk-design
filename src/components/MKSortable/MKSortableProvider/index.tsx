import { FC, HTMLAttributes, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { createPortal } from 'react-dom';

import { closest } from 'helpers';

import { MKSortableContext } from '../context';
import { MKDraggableProps, MKSortableEndDataProps, MKSortableStartDataProps } from '../types';

import { MKDraggableStyled, MKSortableStyled } from './style';

export interface MKSortableProviderProps extends HTMLAttributes<Element> {
  children: ReactNode;
  className?: string;
  draggableClassName?: string;
  useDragHandle?: boolean;
  lockAxis?: 'x' | 'y';
  scrollReduce?: number;
  scrollDelta?: number;
  onSortStart?: (data: MKSortableStartDataProps) => void;
  onSortEnd?: (data: MKSortableEndDataProps) => void;
  onSortOver?: (data: MKSortableEndDataProps) => void;
}

export const MKSortableProvider: FC<MKSortableProviderProps> = ({
  className = '',
  draggableClassName = '',
  onSortEnd,
  onSortStart,
  children,
  lockAxis = 'x',
  scrollDelta = 50,
  scrollReduce = 5,
  ...props
}) => {
  const sortableRef = useRef<HTMLDivElement | null>(null);
  const scrollableRef = useRef<HTMLElement | null>(null);
  const [draggable, setDraggable] = useState<MKDraggableProps | null>(null);

  const oldIndex = useMemo(() => draggable?.index ?? null, [draggable?.index]);
  const oldGroup = useMemo(() => draggable?.group ?? null, [draggable?.group]);

  useEffect(() => {
    const draggableX = draggable?.x ?? null;
    const draggableY = draggable?.y ?? null;

    const scrollable = scrollableRef.current;

    if (scrollable && draggableY !== null && draggableX !== null) {
      const scrollData = {
        top: scrollable.scrollTop,
        left: scrollable.scrollLeft,
      };

      if (scrollable.clientHeight < scrollable.scrollHeight) {
        if (draggableY < scrollable.offsetTop + scrollDelta) {
          scrollData.top += (draggableY - scrollable.offsetTop - scrollDelta) / scrollReduce;
        } else if (draggableY > scrollable.clientHeight) {
          scrollData.top += (draggableY - scrollable.clientHeight) / scrollReduce;
        }
      }

      if (scrollable.clientWidth < scrollable.scrollWidth) {
        if (draggableX < scrollable.offsetLeft + scrollDelta) {
          scrollData.left += (draggableX - scrollable.offsetLeft - scrollDelta) / scrollReduce;
        } else if (draggableY > scrollable.clientHeight) {
          scrollData.left += (draggableX - scrollable.clientHeight) / scrollReduce;
        }
      }

      scrollableRef.current?.scrollTo(scrollData);
    }
  }, [draggable?.x, draggable?.y, scrollDelta, scrollReduce]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const offset = {
        x: e.clientX,
        y: e.clientY,
      };

      setDraggable((prev) => {
        if (prev) {
          return {
            ...prev,
            ...offset,
          };
        }

        return prev;
      });
    };

    const onMouseUp = () => {
      setDraggable(null);
    };

    if (oldIndex !== null) {
      window.addEventListener('mousemove', onMouseMove, true);
      window.addEventListener('mouseup', onMouseUp, true);
    } else {
      window.removeEventListener('mousemove', onMouseMove, true);
      window.removeEventListener('mouseup', onMouseUp, true);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove, true);
      window.removeEventListener('mouseup', onMouseUp, true);
    };
  }, [oldIndex]);

  return (
    <MKSortableContext.Provider
      value={{
        draggable,
        setDraggable: (data) => {
          onSortStart?.(data);
          setDraggable(data);

          const checkIsScrollable = (el: HTMLElement) => {
            const computedStyle = window.getComputedStyle(el);
            const overflowRegex = /(auto|scroll)/;

            return (
              overflowRegex.test(computedStyle.overflow) ||
              overflowRegex.test(computedStyle.overflowX) ||
              overflowRegex.test(computedStyle.overflowY)
            );
          };

          // Find closest scrollable element
          scrollableRef.current = closest({
            el: sortableRef.current,
            selector: '.mk-sortable-wrapper',
            fn: checkIsScrollable,
          });
        },
        setDroppable: (data) => {
          if (data.index !== null && oldIndex !== null) {
            const drop = {
              oldIndex: oldIndex,
              oldGroup: oldGroup,
              newIndex: data.index,
              newGroup: data.group,
            };

            setDraggable((prevState) => {
              if (prevState) {
                return {
                  ...prevState,
                  index: drop.newIndex,
                  group: drop.newGroup,
                };
              }

              return prevState;
            });

            onSortEnd?.(drop);
          }
        },
        lockAxis,
      }}
    >
      <MKSortableStyled
        ref={sortableRef}
        data-testid="mk-sortable"
        mkSorting={!!draggable}
        className={clsx(['mk-sortable', className])}
        {...props}
      >
        {children}
        {!!draggable &&
          createPortal(
            <MKDraggableStyled
              className={clsx('mk-draggable', draggableClassName)}
              style={{
                left: draggable.x - draggable.offsetX,
                top: draggable.y - draggable.offsetY,
                width: draggable.width,
                height: draggable.height,
              }}
              dangerouslySetInnerHTML={{ __html: draggable.html }}
            />,
            document.body,
          )}
      </MKSortableStyled>
    </MKSortableContext.Provider>
  );
};
