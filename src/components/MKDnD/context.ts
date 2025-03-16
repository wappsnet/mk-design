import { createContext, useContext } from 'react';

import { MKDnDDragZoneDataProps, MKDnDDropZoneDataProps } from './types';

export interface MKDnDContextProps {
  registerDropzone: (data: MKDnDDropZoneDataProps) => void;
  unregisterDropzone: (data: MKDnDDropZoneDataProps) => void;
  onDragStart: (data: MKDnDDragZoneDataProps) => void;
  draggable: MKDnDDragZoneDataProps | null;
  onDragEnd: (data: MKDnDDropZoneDataProps | null) => void;
  dropZones: MKDnDDropZoneDataProps[];
}

export const MKDnDContext = createContext<MKDnDContextProps | null>(null);

export const useMKDNDContext = () => {
  const context = useContext(MKDnDContext);
  if (!context) {
    throw new Error('useDropzoneContext must be used within a DropzoneProvider');
  }

  return context;
};
