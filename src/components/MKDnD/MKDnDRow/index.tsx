import { useRef, ReactNode, FC, useMemo, useState, useCallback, useEffect } from 'react';

import { clsx } from 'clsx';

import { replacePathLastPart } from 'helpers';

import { MKIcon } from 'core/MKIcon';

import { MKGrid } from 'components/MKGrid';

import { useMKDNDContext } from '../context';
import { MKDnDDropZoneDataProps } from '../types';

import { MKDnDRowResizerGestureStyled, MKDnDRowResizerStyled, MKDnDRowStyled, MKDnDRowWrapperStyled } from './style';

interface MKDDnDResizeDataProps extends MKDnDDropZoneDataProps {
  height: number;
}

export interface MKDnDRowProps extends MKDnDDropZoneDataProps {
  children?: ReactNode;
  type: 'row';
  height?: number;
  index: number;
  isLast?: boolean;
  isFirst?: boolean;
  onDrop?: (data: any) => void;
  onResize?: (data: MKDDnDResizeDataProps) => void;
  className?: string;
}

export const MKDnDRow: FC<MKDnDRowProps> = ({
  path,
  type,
  height = 200,
  onDrop,
  onResize,
  children,
  index,
  isLast = false,
  isFirst = false,
  className = '',
}) => {
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { dropZones, draggable, onDragEnd, registerDropzone, unregisterDropzone } = useMKDNDContext();
  const [resizer, setResizer] = useState<{ position: number | null; height: number }>({
    height: height,
    position: null,
  });

  const dragging = useMemo(() => !!draggable, [draggable]);
  const active = useMemo(() => !!dropZones.find((item) => item.path === path), [dropZones, path]);

  const handleStartResize = useCallback((pos: number) => {
    setResizer((prevState) => ({
      ...prevState,
      position: pos,
    }));
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setResizer((prevState) => {
        const position = resizer.position ?? 0;
        const difference = e.clientY - position;
        const newHeight = prevState.height + difference;

        return {
          position: e.clientY,
          height: newHeight,
        };
      });
    },
    [resizer?.position],
  );

  const handleMouseUp = useCallback(() => {
    onResize?.({
      path: `${path}/height`,
      type,
      height,
    });
    setResizer((prevState) => ({
      ...prevState,
      position: null,
    }));
  }, [height, onResize, path, type]);

  useEffect(() => {
    setResizer((prevState) => ({
      ...prevState,
      height,
    }));
  }, [height]);

  useEffect(() => {
    if (resizer.position) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, resizer.position]);

  return (
    <>
      {isFirst && dragging && draggable?.path !== path && (
        <MKDnDRow
          type={type}
          index={-1}
          path={replacePathLastPart({
            path,
            newLastPart: String(-1),
          })}
          height={10}
        />
      )}
      {draggable?.path !== path && (
        <MKDnDRowStyled
          ref={dropZoneRef}
          className={clsx('mk-dnd-row', className)}
          mkActive={active && !children}
          mkDragging={dragging}
          mkEmpty={!children}
          mkResizing={!!resizer.position}
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
          <MKDnDRowWrapperStyled
            className="mk-dnd-row__wrapper"
            style={{
              height: resizer.height,
            }}
          >
            <MKGrid.Row>{children}</MKGrid.Row>
          </MKDnDRowWrapperStyled>
          <MKDnDRowResizerStyled
            data-dnd-tool="resizer"
            className="mk-dnd-row__resizer"
            onMouseDown={(e) => {
              if (!e.button) {
                handleStartResize(e.clientY);
              }
            }}
          >
            <MKDnDRowResizerGestureStyled className="mk-dnd-row__resizer-gesture">
              <MKIcon icon="bars" size="sm" />
            </MKDnDRowResizerGestureStyled>
          </MKDnDRowResizerStyled>
        </MKDnDRowStyled>
      )}
      {isLast && dragging && draggable?.path !== path && (
        <MKDnDRow
          type={type}
          index={index + 1}
          path={replacePathLastPart({ path, newLastPart: String(index + 1) })}
          height={10}
        />
      )}
    </>
  );
};
