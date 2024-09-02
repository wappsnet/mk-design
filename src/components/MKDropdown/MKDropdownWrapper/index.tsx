import { FC, ReactNode } from 'react';

import { MKDropdownContext } from 'context';
import { MKPlacementTypes, MKThemeVariants } from 'types';

import { MKPopover } from 'core/MKPopover';

export interface MKDropdownWrapperProps {
  children?: ReactNode;
  delay?: number;
  theme?: MKThemeVariants;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

export const MKDropdownWrapper: FC<MKDropdownWrapperProps> = ({
  children,
  theme = 'primary',
  placement = 'bottom',
  disabled = false,
  delay = 200,
}) => (
  <MKDropdownContext.Provider
    value={{
      theme,
      placement,
      disabled,
    }}
  >
    <MKPopover delay={delay} placement={placement}>
      {children}
    </MKPopover>
  </MKDropdownContext.Provider>
);
