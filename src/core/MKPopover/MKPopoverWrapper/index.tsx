import { FC, ReactNode, useMemo, useState } from 'react';

import { MKPopoverContext } from 'definitions';
import { normalizeDelay } from 'helpers';
import { useTimeout } from 'hooks';
import { MKDelayProps, MKPlacementTypes } from 'types';

export interface MKPopoverWrapperProps {
  children: ReactNode;
  delay?: MKDelayProps;
  placement: MKPlacementTypes;
}

export const MKPopoverWrapper: FC<MKPopoverWrapperProps> = ({ children, placement, delay = 0 }) => {
  const timer = useTimeout();
  const duration = useMemo(() => normalizeDelay(delay), [delay]);
  const [toggle, setToggle] = useState<HTMLElement | null>(null);

  return (
    <MKPopoverContext.Provider
      value={{
        placement,
        toggle,
        delay,
        setToggle: (node) => {
          timer.clear();

          if (node) {
            timer.set(() => {
              setToggle(node);
            }, duration.show);
          } else {
            timer.set(() => {
              setToggle(null);
            }, duration.hide);
          }
        },
      }}
    >
      {children}
    </MKPopoverContext.Provider>
  );
};

export default MKPopoverWrapper;
