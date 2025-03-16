import { MKDnDColumn } from './MKDnDColumn';
import { MKDnDDraggable } from './MKDnDDraggable';
import { MKDnDLayout } from './MKDnDLayout';
import { MKDnDProvider } from './MKDnDProvider';
import { MKDnDRow } from './MKDnDRow';

export const MKDnD = Object.assign(MKDnDProvider, {
  Draggable: MKDnDDraggable,
  Layout: MKDnDLayout,
  Row: MKDnDRow,
  Column: MKDnDColumn,
});
