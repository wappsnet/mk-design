import './style.scss';

import { FC, useMemo, useEffect, ReactNode, useState, useContext } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { MKPopoverContext } from 'context';
import { generatePlacementAbsoluteData } from 'helpers';
import { useOutsideEvent } from 'hooks';
import { MKPlacementDataProps, MKTriggerEventTypes, MKDelayProps } from 'types';

export interface MKPopoverContentProps {
  rootId?: string;
  rootClose?: boolean;
  className?: string;
  children: (data: MKPlacementDataProps, delay: MKDelayProps) => ReactNode;
  triggers?: MKTriggerEventTypes[];
  hideOnScroll?: boolean;
}

export const MKPopoverContent: FC<MKPopoverContentProps> = ({
  children,
  rootClose = true,
  className = '',
  triggers = [],
  rootId,
}) => {
  const { toggle, setToggle, delay, placement } = useContext(MKPopoverContext);
  const [overlayRef, setOverlayRef] = useState<HTMLDivElement | null>(null);
  const overlayRoot = useMemo(() => (rootId ? document.getElementById(rootId) : document.body), [rootId]);

  const clickEvents = useOutsideEvent(
    overlayRef,
    () => {
      setToggle?.(null);
    },
    'mousedown',
  );

  const scrollEvents = useOutsideEvent(
    overlayRef,
    () => {
      setToggle?.(null);
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
    const triggerRect = toggle?.getBoundingClientRect();
    const overlayRect = overlayRef?.getBoundingClientRect();

    if (triggerRect) {
      return generatePlacementAbsoluteData(triggerRect, {
        placement,
        width: overlayRect?.width || 0,
        height: overlayRect?.height || 0,
      });
    }
  }, [placement, toggle, overlayRef]);

  if (overlayData) {
    if (overlayRoot) {
      return (
        <>
          {createPortal(
            <div
              className={classNames('mk-popover-wrapper', className)}
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
              onKeyUp={(e) => {
                e.stopPropagation();
              }}
              onMouseUp={(e) => {
                e.stopPropagation();
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              onBlur={(e) => {
                if (triggers?.includes('blur')) {
                  if (!overlayRef?.contains(e.relatedTarget)) {
                    setToggle?.(null);
                  }
                }
              }}
            >
              {children(overlayData, delay)}
            </div>,
            overlayRoot,
          )}
        </>
      );
    }
  }

  return null;
};

export default MKPopoverContent;
