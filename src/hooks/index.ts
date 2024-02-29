import { useContext, useMemo, useRef } from 'react';

import { MKThemeContext } from 'context';

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
    event.stopPropagation();
  };

  const onOutsideClick = (event: Event) => {
    event.stopPropagation();
    handler(event);
  };

  return {
    trigger: () => {
      ref?.addEventListener(mouseEvent, onClick);
      document.addEventListener(mouseEvent, onOutsideClick);
    },
    cancel: () => {
      ref?.removeEventListener(mouseEvent, onClick);
      document.removeEventListener(mouseEvent, onOutsideClick);
    },
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
