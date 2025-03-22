import { FC, ReactNode, useMemo, useRef } from 'react';

import { clsx } from 'clsx';

import { useMKDNDContext } from '../context';
import { MKDnDDropZoneDataProps } from '../types';

import { MKDnDDropZoneStyled } from './style';

export interface MKDnDDropzoneProps extends MKDnDDropZoneDataProps {
  children?: ReactNode;
  type: 'zone';
  onDrop?: (data: any) => void;
  index: number;
  className?: string;
}

export const MKDnDDropzone: FC<MKDnDDropzoneProps> = ({ path, type, onDrop, children, className = '' }) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropZones, draggable, onDragEnd, registerDropzone, unregisterDropzone } = useMKDNDContext();

  const dragging = useMemo(() => !!draggable, [draggable]);
  const active = useMemo(() => !!dropZones.find((item) => item.path === path), [dropZones, path]);

  return (
    <MKDnDDropZoneStyled
      ref={dropZoneRef}
      className={clsx('mk-dnd-column', className)}
      mkActive={active && !children}
      mkDragging={dragging}
      mkEmpty={!children}
      onMouseEnter={() => {
        if (dragging) {
          registerDropzone({
            path,
            type,
          });
        }
      }}
      onMouseLeave={() => {
        if (dragging) {
          unregisterDropzone({
            path,
            type,
          });
        }
      }}
      onMouseUp={(e) => {
        if (dragging) {
          e.stopPropagation();

          onDragEnd?.({
            path,
            type,
          });

          onDrop?.({
            path,
            type,
          });
        }
      }}
    >
      {children}
    </MKDnDDropZoneStyled>
  );
};
