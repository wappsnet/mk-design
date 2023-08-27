import { FC, ReactNode } from 'react';

import MKPopover from 'core/MKPopover';
import { MKPlacementTypes, MKStyleVariants } from 'types';
import { MKDropdownContext } from 'definitions';

export interface MKDropdownWrapperProps {
  children: ReactNode;
  delay?: number;
  variant?: MKStyleVariants;
  placement?: MKPlacementTypes;
  disabled?: boolean;
}

const MKDropdownWrapper: FC<MKDropdownWrapperProps> = ({
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

export default MKDropdownWrapper;
