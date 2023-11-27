import { ReactNode } from 'react';

export interface MKChildIconProps {
  node: ReactNode;
  position: 'start' | 'end';
}

export type MKStyleVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
  | 'neutral';
export type MKShapeVariants = 'square' | 'round' | 'circle' | 'border';
export type MKTriggerEventTypes = 'hover' | 'focus' | 'click' | 'blur' | 'visibility';
export type MKPlacementTypes = 'left' | 'right' | 'top' | 'bottom' | 'auto';
export type MKSizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive';

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
