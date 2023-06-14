import { useContext, useMemo, useRef } from 'react';

import { MKThemeContext } from 'definitions';

export function useMKBreakpoints() {
  const { breakpoints } = useContext(MKThemeContext);
  return breakpoints;
}

export function useMKMinBreakpoint() {
  const { minBreakpoint } = useContext(MKThemeContext);
  return minBreakpoint;
}

export const useOutsideEvent = <T extends HTMLElement = HTMLElement>(
  ref: T | null,
  handler: (event: Event) => void,
  mouseEvent: 'mousedown' | 'scroll' | 'mouseup' = 'mousedown',
) => {
  const onClick = (event: Event) => {
    if (ref?.contains(event.target as Node)) {
      return;
    }

    handler(event);
  };

  return {
    trigger: () => document.addEventListener(mouseEvent, onClick),
    cancel: () => document.removeEventListener(mouseEvent, onClick),
  };
};

export const useTimeout = () => {
  const handleRef = useRef<any>();

  return useMemo(() => {
    const clear = () => clearTimeout(handleRef.current);

    function set(fn: () => void, delayMs = 0): void {
      if (handleRef.current) {
        clear();
      }

      handleRef.current = setTimeout(fn, delayMs);
    }

    return {
      set,
      clear,
    };
  }, []);
};
