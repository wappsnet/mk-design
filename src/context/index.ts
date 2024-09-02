import { createContext, ReactNode } from 'react';

import { MKPlacementTypes, MKThemeVariants, MKDelayProps, MKSizeTypes } from 'types';

export type MKTabsContextProps = {
  active?: string;
  setActive?: (tab: string) => void;
};

export const MKTabsContext = createContext<MKTabsContextProps>({
  active: '',
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
  theme: MKThemeVariants;
  create?: (data: MKStepProps) => void;
  onChange?: (step: string) => void;
}

export const MKStepsContext = createContext<MKStepsContextProps>({
  steps: [],
  active: null,
  direction: 'horizontal',
  theme: 'primary',
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
  theme?: MKThemeVariants;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

export const MKDropdownContext = createContext<MKDropdownContextProps>({
  theme: 'primary',
  placement: 'bottom',
  disabled: false,
});

export interface MKMenuContextProps {
  theme?: MKThemeVariants;
}

export const MKMenuContext = createContext<MKMenuContextProps>({
  theme: 'primary',
});

export interface MKLayoutContextProps {
  theme?: MKThemeVariants;
  expanded?: boolean;
  setExpanded?: (status: boolean) => void;
  sidebar?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  banner?: ReactNode;
}

export const MKLayoutContext = createContext<MKLayoutContextProps>({
  theme: 'primary',
  expanded: true,
});

interface MKCardContextProps {
  theme: MKThemeVariants;
  stripped: boolean;
  highlighted: boolean;
  borderless: boolean;
  compact: boolean;
}

export const MKCardContext = createContext<MKCardContextProps>({
  theme: 'primary',
  stripped: false,
  highlighted: false,
  borderless: false,
  compact: false,
});
