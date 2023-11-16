import './style.scss';

import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { createPortal } from 'react-dom';

import { MKModalContext } from 'definitions';
import { MKSizeTypes } from 'types';

export interface MKModalProviderProps {
  size?: MKSizeTypes;
  centered?: boolean;
  scrollable?: boolean;
  closableKeys?: string[];
  delay?: number;
  hideOnBackdropClick?: boolean;
  children: ReactNode;
  show?: boolean;
  onHide?: () => void;
}

export const MKModalWrapper: FC<MKModalProviderProps> = ({
  show,
  onHide,
  size = 'md',
  centered = true,
  scrollable = true,
  delay = 300,
  closableKeys = ['Escape'],
  hideOnBackdropClick = true,
  children,
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

  if (show) {
    return (
      <>
        {createPortal(
          <MKModalContext.Provider
            value={{
              close: closeModal,
            }}
          >
            <div
              ref={containerRef}
              tabIndex={-1}
              style={{ animationDuration: `${delay}ms` }}
              className={classNames(['mk-modal-container', { centered }, { visible }])}
              onKeyDown={(e) => {
                if (!!closableKeys?.includes(e.key)) {
                  closeModal();
                }
              }}
              onClick={() => {
                if (hideOnBackdropClick) {
                  closeModal();
                }
              }}
            >
              <div tabIndex={-1} className={classNames(['mk-modal-dialog', size, { centered }, { scrollable }])}>
                <div
                  data-testid="mk-modal"
                  tabIndex={0}
                  role="tab"
                  className="mk-modal"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
          </MKModalContext.Provider>,
          document.body,
        )}
      </>
    );
  }

  return null;
};
