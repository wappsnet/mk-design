import { useState, FC, ReactNode, useCallback } from 'react';

import { MKDnDContext } from '../context';
import { MKDnDDragZoneDataProps, MKDnDDropZoneDataProps } from '../types';

interface MKDnDDragEndProps {
  data: MKDnDDropZoneDataProps | null;
  draggable: MKDnDDragZoneDataProps;
}

export interface MKDragDropProviderProps {
  children?: ReactNode;
  onDragEnd?: (data: MKDnDDragEndProps) => void;
  onDragStart?: (data: MKDnDDragZoneDataProps) => void;
}

export const MKDnDProvider: FC<MKDragDropProviderProps> = ({ children, onDragEnd, onDragStart }) => {
  const [dropZones, setDropZones] = useState<MKDnDDropZoneDataProps[]>([]);
  const [draggable, setDraggable] = useState<MKDnDDragZoneDataProps | null>(null);

  const registerDropzone = useCallback((data: MKDnDDropZoneDataProps) => {
    setDropZones((prev) => {
      const existing = prev.filter(({ path }) => path === data.path);
      return [...existing, data];
    });
  }, []);

  const unregisterDropzone = useCallback((data: MKDnDDropZoneDataProps) => {
    setDropZones((prev) => prev.filter((item) => item.path !== data.path));
  }, []);

  const handleDragStart = useCallback(
    (data: MKDnDDragZoneDataProps) => {
      setDraggable(data);
      onDragStart?.(data);
    },
    [onDragStart],
  );

  const handleDragEnd = useCallback(
    (data: MKDnDDropZoneDataProps | null) => {
      if (draggable) {
        onDragEnd?.({ data, draggable });
      }
      setDraggable(null);
      setDropZones([]);
    },
    [draggable, onDragEnd],
  );

  return (
    <MKDnDContext.Provider
      value={{
        registerDropzone,
        unregisterDropzone,
        dropZones,
        draggable,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
      }}
    >
      {children}
    </MKDnDContext.Provider>
  );
};
