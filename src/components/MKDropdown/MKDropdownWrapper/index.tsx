import { FC, ReactNode } from 'react';

import { MKDropdownContext } from 'definitions';
import { MKPlacementTypes, MKStyleVariants } from 'types';

import { MKPopover } from 'core/MKPopover';

export interface MKDropdownWrapperProps {
  children: ReactNode;
  delay?: number;
  variant?: MKStyleVariants;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

export const MKDropdownWrapper: FC<MKDropdownWrapperProps> = ({
  children,
  variant = 'primary',
  placement = 'bottom',
  disabled = false,
  delay = 200,
}) => (
  <MKDropdownContext.Provider
    value={{
      variant,
      placement,
      disabled,
    }}
  >
    <MKPopover delay={delay} placement={placement}>
      {children}
    </MKPopover>
  </MKDropdownContext.Provider>
);
