import { useRef, ReactNode, FC, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKGrid } from 'components/MKGrid';

import { useMKDNDContext } from '../context';
import { MKDnDDropZoneDataProps } from '../types';

import { MKDnDLayoutStyled } from './style';

export interface MKDnDLayoutProps extends MKDnDDropZoneDataProps {
  children: ReactNode;
  type: 'layout';
  onDrop?: (data: any) => void;
}

export const MKDnDLayout: FC<MKDnDLayoutProps> = ({ path, type, onDrop, children }) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropZones, draggable, onDragEnd, registerDropzone, unregisterDropzone } = useMKDNDContext();

  const dragging = useMemo(() => !!draggable, [draggable]);
  const active = useMemo(() => !!dropZones.find((item) => item.path === path), [dropZones, path]);

  return (
    <MKDnDLayoutStyled
      ref={dropZoneRef}
      className={clsx('mk-dnd-layout')}
      mkActive={active}
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
      <MKGrid.Box direction="column">{children}</MKGrid.Box>
    </MKDnDLayoutStyled>
  );
};
