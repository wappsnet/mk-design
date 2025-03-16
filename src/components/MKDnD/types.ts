export type MKDropZoneTypes = 'layout' | 'row' | 'column';

export interface MKDnDDragZoneDataProps {
  data: any;
  path?: string | null;
  id: string;
}

export interface MKDnDDropZoneDataProps {
  path: string;
  type: MKDropZoneTypes;
}
