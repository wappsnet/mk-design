import { createContext } from 'react';

import { MKDraggableProps, MKSortableAxisTypes } from './types';

interface MKDroppableProps {
  index: number;
  group: string | number | null;
}

export interface MKSortableContextProps {
  draggable: MKDraggableProps | null;
  setDraggable?: (active: MKDraggableProps) => void;
  setDroppable?: (droppable: MKDroppableProps) => void;
  lockAxis?: MKSortableAxisTypes;
}

export const MKSortableContext = createContext<MKSortableContextProps>({
  draggable: null,
  lockAxis: 'x',
});
