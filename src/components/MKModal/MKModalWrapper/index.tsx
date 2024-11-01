import { FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { clsx } from 'clsx';
import { createPortal } from 'react-dom';

import { MKModalContext } from 'context';
import { MK_SIZES } from 'definitions';

import { MKModalContainerStyled, MKModalDialogStyled, MKModalStyled } from './style';

export interface MKModalProviderProps {
  rootSelector?: string;
  size?: keyof typeof MK_SIZES.modal;
  centered?: boolean;
  scrollable?: boolean;
  closableKeys?: string[];
  delay?: number;
  hideOnBackdropClick?: boolean;
  children?: ReactNode;
  show?: boolean;
  onHide?: () => void;
  className?: string;
}

export const MKModalWrapper: FC<MKModalProviderProps> = ({
  show = false,
  onHide,
  size = 'md',
  centered = true,
  scrollable = true,
  delay = 300,
  closableKeys = ['Escape'],
  hideOnBackdropClick = true,
  rootSelector,
  children,
  className = '',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeOutRef = useRef<number>(-1);
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (containerRef.current && visible) {
      if (!containerRef.current.contains(document.activeElement)) {
        containerRef.current.focus();
      }
    }
  }, [containerRef, visible]);

  const closeModal = useCallback(() => {
    setVisible(false);
    timeOutRef.current = window.setTimeout(() => {
      onHide?.();
    }, delay);
  }, [delay, onHide]);

  useEffect(() => {
    window.clearTimeout(timeOutRef.current);

    if (show) {
      setVisible(true);
    } else {
      setVisible(false);
      timeOutRef.current = window.setTimeout(() => {
        onHide?.();
      }, delay);
    }
  }, [show, delay, onHide]);

  useEffect(
    () => () => {
      window.clearTimeout(timeOutRef.current);
    },
    [],
  );

  const container = useMemo(() => {
    if (rootSelector) {
      const root = document.querySelector(rootSelector);

      if (root) {
        return root;
      }
    }

    return document.body;
  }, [rootSelector]);

  if (show) {
    return (
      <>
        {createPortal(
          <MKModalContext.Provider
            value={{
              close: closeModal,
              scrollable,
              centered,
            }}
          >
            <MKModalContainerStyled
              ref={containerRef}
              tabIndex={-1}
              style={{ animationDuration: `${delay}ms` }}
              className={clsx(['mk-modal-container', className])}
              onKeyDown={(e) => {
                if (closableKeys?.includes(e.key)) {
                  closeModal();
                }
              }}
              onClick={() => {
                if (hideOnBackdropClick) {
                  closeModal();
                }
              }}
              mkVisible={visible}
              {...props}
            >
              <MKModalDialogStyled
                tabIndex={-1}
                className="mk-modal-dialog"
                mkSize={size}
                mkVisible={visible}
                mkCentered={centered}
                mkScrollable={scrollable}
              >
                <MKModalStyled
                  data-testid="mk-modal"
                  tabIndex={0}
                  role="tab"
                  className="mk-modal"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  mkScrollable={scrollable}
                >
                  {children}
                </MKModalStyled>
              </MKModalDialogStyled>
            </MKModalContainerStyled>
          </MKModalContext.Provider>,
          container,
        )}
      </>
    );
  }

  return null;
};
