import { FC, ReactNode, useMemo, useState } from 'react';

import { normalizeDelay } from 'helpers';
import { useTimeout } from 'hooks';
import { MKDelayProps, MKOverlayStateProps } from 'types';

export interface MKOverlayWrapperProps {
  onToggle?: (show: boolean) => void;
  children: (state: MKOverlayStateProps | null, setState: (state: MKOverlayStateProps | null) => void) => ReactNode;
  delay?: MKDelayProps;
}

export const MKOverlayWrapper: FC<MKOverlayWrapperProps> = ({ children, onToggle, delay = 0 }) => {
  const [state, setState] = useState<MKOverlayStateProps | null>(null);
  const timer = useTimeout();
  const duration = useMemo(() => normalizeDelay(delay), [delay]);

  console.log(state);
  return (
    <>
      {children(state, (data) => {
        if (data?.target) {
          timer.set(() => setState(data), duration.show);
        } else {
          timer.set(() => setState(data), duration.hide);
        }

        onToggle?.(!!data?.target);
      })}
    </>
  );
};

export default MKOverlayWrapper;
