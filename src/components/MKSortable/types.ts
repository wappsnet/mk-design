import { HTMLAttributes, ReactElement, MouseEvent } from 'react';

export interface MKSortableEndDataProps {
  oldIndex: number;
  newIndex: number;
  oldGroup: string | number | null;
  newGroup: string | number | null;
}

export interface MKSortableStartDataProps {
  index: number;
  group?: string | number | null;
}

export interface MKSortableChildProps extends HTMLAttributes<HTMLElement> {
  'data-index'?: number;
  'data-group'?: number | string | null;
  'data-testid'?: string;
  'data-draggable'?: boolean;
  onMouseDown?: (Event: MouseEvent) => void;
  onMouseEnter?: (Event: MouseEvent) => void;
  onMouseMove?: (Event: MouseEvent) => void;
}

export interface MKDraggableProps {
  index: number;
  group: string | number | null;
  html: string;
  node: ReactElement;
  width: number;
  height: number;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  dnd?: string;
}

export type MKSortableAxisTypes = 'x' | 'y';
