import { FC, ReactNode } from 'react';

import { MKDropdownContext } from 'context';
import { MKPlacementTypes, MKDesignTypes } from 'types';

import { MKPopover } from 'core/MKPopover';

export interface MKDropdownWrapperProps {
  children?: ReactNode;
  delay?: number;
  design?: MKDesignTypes;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

export const MKDropdownWrapper: FC<MKDropdownWrapperProps> = ({
  children,
  design = 'primary',
  placement = 'bottom',
  disabled = false,
  delay = 200,
}) => (
  <MKDropdownContext.Provider
    value={{
      design,
      placement,
      disabled,
    }}
  >
    <MKPopover delay={delay} placement={placement}>
      {children}
    </MKPopover>
  </MKDropdownContext.Provider>
);
