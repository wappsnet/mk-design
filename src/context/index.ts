import { createContext, ReactNode } from 'react';

import {
  MKPlacementTypes,
  MKDesignTypes,
  MKDelayProps,
  MKSizeTypes,
  MKShapeTypes,
  MKOrientationTypes,
  MKAnimationTypes,
  MKTabShapeTypes,
  MKJustifyTypes,
} from 'types';

export type MKTabsContextProps = {
  active?: string;
  setActive?: (tab: string) => void;
  design: MKDesignTypes;
  shape: MKTabShapeTypes;
  justify: MKJustifyTypes;
  bordered: boolean;
};

export const MKTabsContext = createContext<MKTabsContextProps>({
  active: '',
  design: 'base',
  shape: 'tab',
  justify: 'center',
  bordered: true,
});

export interface MKThemeContextProps {
  breakpoints: MKSizeTypes[];
  minBreakpoint?: MKSizeTypes;
  dir?: string;
}

export const MKThemeContext = createContext<MKThemeContextProps>({
  breakpoints: ['xl', 'lg', 'md', 'sm', 'xs'],
  minBreakpoint: 'xs',
});

export interface MKCollapseContextProps {
  bordered: boolean;
  collapsed: string[];
  collapse?: (key: string) => void;
}

export const MKCollapseContext = createContext<MKCollapseContextProps>({
  collapsed: [],
  bordered: false,
});

export interface MKModalContextProps {
  close?: () => void;
  scrollable: boolean;
  centered: boolean;
}

export const MKModalContext = createContext<MKModalContextProps>({
  scrollable: true,
  centered: true,
});

export interface MKStepProps {
  name: string;
  label: ReactNode;
  icon: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
}

export interface MKStepsContextProps {
  steps: MKStepProps[];
  active: string | null;
  direction: 'horizontal' | 'vertical';
  design: MKDesignTypes;
  create?: (data: MKStepProps) => void;
  onChange?: (step: string) => void;
}

export const MKStepsContext = createContext<MKStepsContextProps>({
  steps: [],
  active: null,
  direction: 'horizontal',
  design: 'primary',
});

export interface MKPopoverContextProps {
  toggle: HTMLElement | null;
  placement: MKPlacementTypes;
  delay: MKDelayProps;
  setToggle?: (toggle: HTMLElement | null) => void;
}

export const MKPopoverContext = createContext<MKPopoverContextProps>({
  delay: 0,
  toggle: null,
  placement: 'bottom',
});

export interface MKDropdownContextProps {
  design: MKDesignTypes;
  placement?: MKPlacementTypes;
  disabled: boolean;
}

export const MKDropdownContext = createContext<MKDropdownContextProps>({
  design: 'primary',
  placement: 'bottom',
  disabled: false,
});

export interface MKMenuContextProps {
  design: MKDesignTypes;
}

export const MKMenuContext = createContext<MKMenuContextProps>({
  design: 'primary',
});

export interface MKLayoutContextProps {
  design: MKDesignTypes;
  expanded?: boolean;
  setExpanded?: (status: boolean) => void;
  sidebar?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  banner?: ReactNode;
}

export const MKLayoutContext = createContext<MKLayoutContextProps>({
  design: 'primary',
  expanded: true,
});

export interface MKCardContextProps {
  design: MKDesignTypes;
  stripped: boolean;
  highlighted: boolean;
  borderless: boolean;
  compact: boolean;
}

export const MKCardContext = createContext<MKCardContextProps>({
  design: 'primary',
  stripped: false,
  highlighted: false,
  borderless: false,
  compact: false,
});

export interface MKPaginationContextProps {
  design: MKDesignTypes;
  shape: MKShapeTypes;
  current: number;
}

export const MKPaginationContext = createContext<MKPaginationContextProps>({
  design: 'primary',
  shape: 'round',
  current: 1,
});

export interface MKSliderContextProps {
  direction: MKOrientationTypes;
  animation?: MKAnimationTypes;
}

export const MKSliderContext = createContext<MKSliderContextProps>({
  direction: 'horizontal',
});

export interface MKActionBarContextProps {
  design: MKDesignTypes;
}

export const MKActionBarContext = createContext<MKActionBarContextProps>({
  design: 'tertiary',
});
