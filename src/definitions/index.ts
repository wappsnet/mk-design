import { createContext, ReactNode } from 'react';

import { MKChildIconProps, MKPlacementTypes, MKStyleVariants, MKDelayProps } from 'types';

export type MKTabsItemProps = {
  label?: ReactNode;
  children?: ReactNode;
  icon?: MKChildIconProps;
  name: string;
};

export type MKTabsContextProps = {
  active?: string;
  items: Record<string, MKTabsItemProps>;
  addItem?: (data: MKTabsItemProps) => void;
  setActive?: (tab: string) => void;
};

export const MKTabsContext = createContext<MKTabsContextProps>({
  items: {},
});

export const DEFAULT_BREAKPOINTS = ['xl', 'lg', 'md', 'sm', 'xs'];
export const DEFAULT_MIN_BREAKPOINT = 'xs';

export interface MKThemeContextProps {
  breakpoints: string[];
  minBreakpoint?: string;
  dir?: string;
}

export const MKThemeContext = createContext<MKThemeContextProps>({
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT,
});

export interface MKCollapseContextProps {
  collapsed: string[];
  collapse?: (key: string) => void;
}

export const MKCollapseContext = createContext<MKCollapseContextProps>({
  collapsed: [],
});

export interface MKModalContextProps {
  close?: () => void;
}

export const MKModalContext = createContext<MKModalContextProps>({});

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
  design: MKStyleVariants;
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
  design?: MKStyleVariants;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

export const MKDropdownContext = createContext<MKDropdownContextProps>({
  design: 'primary',
  placement: 'bottom',
  disabled: false,
});

export interface MKMenuContextProps {
  design?: MKStyleVariants;
}

export const MKMenuContext = createContext<MKMenuContextProps>({
  design: 'primary',
});

export interface MKLayoutContextProps {
  design?: MKStyleVariants;
  expanded?: boolean;
  setExpanded?: (status: boolean) => void;
  sidebar?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
}

export const MKLayoutContext = createContext<MKLayoutContextProps>({
  design: 'primary',
  expanded: true,
});
