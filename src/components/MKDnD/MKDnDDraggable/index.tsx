import { useState, useRef, useEffect, useCallback, FC, ReactNode } from 'react';

import { createPortal } from 'react-dom';

import { useMKDNDContext } from '../context';

import { MKDnDDraggablePointerStyled, MKDnDDraggableStyled } from './style';

export interface MKDraggableProps {
  children: ReactNode;
  data: any;
  path?: string | null;
  id: string;
}

export const MKDnDDraggable: FC<MKDraggableProps> = ({ children, data, path, id }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { onDragStart, onDragEnd, draggable } = useMKDNDContext();
  const dragRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback(
    (pos: { x: number; y: number }) => {
      if (dragRef.current) {
        const rect = dragRef.current.getBoundingClientRect();
        setOffset({
          x: pos.x - rect.left,
          y: pos.y - rect.top,
        });
        onDragStart({ data, id, path });
      }
    },
    [onDragStart, data, id, path],
  );

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!draggable) {
        return;
      }

      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    },
    [draggable, offset],
  );

  const onMouseUp = useCallback(() => {
    onDragEnd(null);
  }, [onDragEnd]);

  useEffect(() => {
    if (draggable) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, [draggable, onMouseMove, onMouseUp]);

  return (
    <MKDnDDraggableStyled
      ref={dragRef}
      onMouseDown={(e) => {
        if (!e.button) {
          onMouseDown({
            x: e.clientX,
            y: e.clientY,
          });
          e.preventDefault();
        }
      }}
      className="mk-dnd-draggable"
    >
      {children}
      {draggable &&
        draggable.data === data &&
        draggable.id === id &&
        !!dragRef.current &&
        createPortal(
          <MKDnDDraggablePointerStyled
            className="mk-dnd-draggable-pointer"
            style={{
              left: draggable ? position.x : 0,
              top: draggable ? position.y : 0,
            }}
            dangerouslySetInnerHTML={{ __html: dragRef.current.innerHTML }}
          />,
          document.body,
        )}
    </MKDnDDraggableStyled>
  );
};
