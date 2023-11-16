import { FC, useContext, ReactNode } from 'react';

import { MKPopoverContext } from 'definitions';
import { MKPlacementTypes } from 'types';

type MKPopoverToggleDataProps = {
  onToggle: (node: HTMLElement | null) => void;
  status: boolean;
};

export interface MKPopoverToggleProps {
  placement?: MKPlacementTypes;
  children: (data: MKPopoverToggleDataProps) => ReactNode;
}

export const MKPopoverToggle: FC<MKPopoverToggleProps> = ({ children }) => {
  const { toggle, setToggle } = useContext(MKPopoverContext);
  return <>{children({ status: !!toggle, onToggle: (node) => setToggle?.(node) })}</>;
};

export default MKPopoverToggle;
