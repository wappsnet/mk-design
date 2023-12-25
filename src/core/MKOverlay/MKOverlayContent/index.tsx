import './style.scss';

import { FC, useMemo, useEffect, ReactNode, useState } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { generatePlacementAbsoluteData, generatePlacementRelativeData } from 'helpers';
import { useOutsideEvent } from 'hooks';
import { MKPlacementDataProps, MKOverlayStateProps, MKPlacementTypes, MKTriggerEventTypes } from 'types';

export interface MKOverLayContentProps {
  rootId?: string;
  rootClose?: boolean;
  centralize?: boolean;
  className?: string;
  state: MKOverlayStateProps;
  setState: (state: MKOverlayStateProps | null) => void;
  placement: MKPlacementTypes;
  children: (data: MKPlacementDataProps) => ReactNode;
  triggers?: MKTriggerEventTypes[];
  hideOnScroll?: boolean;
}

export const MKOverLayContent: FC<MKOverLayContentProps> = ({
  children,
  rootClose = true,
  centralize = false,
  className = '',
  state,
  setState,
  placement,
  triggers = [],
  rootId = 'root',
}) => {
  const [overlayRef, setOverlayRef] = useState<HTMLDivElement | null>(null);
  const overlayRoot = useMemo(() => (rootId ? document.getElementById(rootId) : document.body), [rootId]);

  const clickEvents = useOutsideEvent(
    overlayRef,
    () => {
      setState(null);
    },
    'mousedown',
  );

  const scrollEvents = useOutsideEvent(
    overlayRef,
    () => {
      setState(null);
    },
    'scroll',
  );

  useEffect(() => {
    if (rootClose) {
      clickEvents.trigger();
    } else {
      clickEvents.cancel();
    }

    return () => {
      clickEvents.cancel();
    };
  }, [clickEvents, rootClose]);

  useEffect(() => {
    scrollEvents.trigger();

    return () => {
      scrollEvents.cancel();
    };
  }, [scrollEvents]);

  const overlayData = useMemo(() => {
    const triggerRect = state.target?.getBoundingClientRect();
    const overlayRect = overlayRef?.getBoundingClientRect();

    if (triggerRect) {
      if (centralize) {
        return generatePlacementRelativeData(triggerRect, {
          placement,
          width: overlayRect?.width || 0,
          height: overlayRect?.height || 0,
        });
      } else {
        return generatePlacementAbsoluteData(triggerRect, {
          placement,
          width: overlayRect?.width || 0,
          height: overlayRect?.height || 0,
        });
      }
    }
  }, [placement, centralize, state?.target, overlayRef]);

  console.log(overlayData, overlayData);
  if (overlayData) {
    if (overlayRoot) {
      return (
        <>
          {createPortal(
            <div
              className={classNames('mk-overlay-wrapper', className)}
              data-placement={overlayData.placement}
              style={{
                left: overlayData.left,
                right: overlayData.right,
                top: overlayData.top,
                bottom: overlayData.bottom,
                transform: `translate(${overlayData.translateX || 0}px, ${overlayData.translateY || 0}px)`,
              }}
              ref={(node) => {
                setOverlayRef(node);
              }}
              onMouseOver={() => {
                if (state && triggers?.includes('hover')) {
                  setState(state);
                }
              }}
              onMouseOut={() => {
                if (triggers?.includes('hover')) {
                  setState(null);
                }
              }}
              onBlur={(e) => {
                if (triggers?.includes('blur')) {
                  if (!overlayRef?.contains(e.relatedTarget)) {
                    setState(null);
                  }
                }
              }}
            >
              {children(overlayData)}
            </div>,
            overlayRoot,
          )}
        </>
      );
    }
  }

  return null;
};
