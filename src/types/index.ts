import { ReactNode } from 'react';

export interface MKChildIconProps {
  node: ReactNode;
  position: 'start' | 'end';
}

export type MKOrientationVariants = 'horizontal' | 'vertical';

export type MKStyleVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'new'
  | 'warning'
  | 'neutral';

export type MKShapeVariants = 'square' | 'round' | 'circle' | 'border';

export type MKTriggerEventTypes = 'hover' | 'focus' | 'click' | 'blur' | 'visibility';

export type MKPlacementTypes = 'left' | 'right' | 'top' | 'bottom' | 'auto';

export type MKSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive';

export type MKSizeXTypes = `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}x`;

export type MKHeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface MKPlacementDataProps {
  placement: MKPlacementTypes;
  width?: number;
  height?: number;
  triggerWidth?: number;
  triggerHeight?: number;
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
  translateX?: number;
  translateY?: number;
}

export interface MKOverlayStateProps {
  target: HTMLElement | null;
}

export type MKDelayProps = number | { show: number; hide: number };

export enum MKFiltersEnum {
  Options,
  Groups,
  Search,
  Date,
}
