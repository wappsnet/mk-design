import { useRef, ReactNode, FC, useMemo } from 'react';

import { clsx } from 'clsx';

import { replacePathLastPart } from 'helpers';
import { MKGridColSizeTypes } from 'types';

import { MKGrid } from 'components/MKGrid';

import { useMKDNDContext } from '../context';
import { MKDnDDropZoneDataProps } from '../types';

import { MKDnDColumnStyled } from './style';

export interface MKDnDColumnProps extends MKDnDDropZoneDataProps {
  children?: ReactNode;
  type: 'column';
  col?: MKGridColSizeTypes;
  onDrop?: (data: any) => void;
  index: number;
  sibling?: boolean;
  last?: boolean;
  first?: boolean;
  className?: string;
}

export const MKDnDColumn: FC<MKDnDColumnProps> = ({
  path,
  col,
  type,
  onDrop,
  children,
  index,
  className = '',
  first = false,
  last = false,
}) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropZones, draggable, onDragEnd, registerDropzone, unregisterDropzone } = useMKDNDContext();

  const dragging = useMemo(() => !!draggable, [draggable]);
  const active = useMemo(() => !!dropZones.find((item) => item.path === path), [dropZones, path]);

  const size = useMemo(() => {
    if (col) {
      return col;
    }

    if (children) {
      return true;
    }
  }, [children, col]);

  return (
    <>
      {first && dragging && draggable?.path !== path && (
        <MKDnDColumn type={type} index={-1} path={replacePathLastPart({ path, newLastPart: String(-1) })} col={1} />
      )}
      {draggable?.path !== path && (
        <MKGrid.Col lg={size ?? 'auto'} expanded>
          <MKDnDColumnStyled
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
          </MKDnDColumnStyled>
        </MKGrid.Col>
      )}
      {last && dragging && draggable?.path !== path && (
        <MKDnDColumn
          type={type}
          index={index + 1}
          col={1}
          path={replacePathLastPart({ path, newLastPart: String(index + 1) })}
        />
      )}
    </>
  );
};
