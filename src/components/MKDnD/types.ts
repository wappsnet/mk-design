export type MKDropZoneTypes = 'layout' | 'row' | 'column' | 'zone';

export interface MKDnDDragZoneDataProps {
  data: any;
  path?: string | null;
}

export interface MKDnDDropZoneDataProps {
  path: string;
  type: MKDropZoneTypes;
}
