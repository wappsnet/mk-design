import { FC, useMemo, useEffect, ReactNode, useState, useContext } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { generatePlacementAbsoluteData } from 'helpers';
import { MKPlacementDataProps, MKTriggerEventTypes, MKDelayProps } from 'types';
import { useOutsideEvent } from 'hooks';
import { MKPopoverContext } from 'definitions';

export interface MKPopoverContentProps {
  rootId?: string;
  rootClose?: boolean;
  className?: string;
  children: (data: MKPlacementDataProps, delay: MKDelayProps) => ReactNode;
  triggers?: MKTriggerEventTypes[];
  hideOnScroll?: boolean;
}

const MKPopoverContent: FC<MKPopoverContentProps> = ({
  children,
  rootClose = true,
  className = '',
  triggers = [],
  rootId = 'root',
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
      return createPortal(
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
          onKeyUp={() => {
            setToggle?.(null);
          }}
          onMouseUp={() => {
            setToggle?.(null);
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
      );
    }
  }

  return null;
};

export default MKPopoverContent;
