import './style.scss';

import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

import { MKSwiper } from 'core/MKSwiper';

export interface MKLayoutSidebarProps {
  children?: ReactNode;
  stick?: 'left' | 'right';
  brand?: ReactNode;
  width?: number;
  ratio?: number;
  swiper?: number;
}

export const MKLayoutSidebar: FC<MKLayoutSidebarProps> = ({
  children,
  brand,
  width = 250,
  ratio = 0.2,
  swiper = 50,
  stick = 'left',
}) => {
  const { design, expanded, setExpanded, sidebar } = useContext(MKLayoutContext);

  const styles = useMemo(() => {
    if (stick === 'right') {
      if (expanded) {
        return {
          left: 0,
          right: 0,
        };
      } else {
        return {
          left: 0,
          right: -width,
        };
      }
    }

    if (expanded) {
      return {
        left: 0,
        right: 0,
      };
    } else {
      return {
        left: -width,
        right: 0,
      };
    }
  }, [expanded, stick, width]);

  return (
    <MKSwiper
      axis="x"
      onSwipeEnd={({ x }) => {
        if (x > width * ratio) {
          setExpanded?.(stick === 'left');
        } else if (x < -(width * ratio)) {
          setExpanded?.(stick === 'right');
        }
      }}
    >
      {({ swipe, triggerSwipe }) => {
        const margins = {
          left: styles.left,
          right: styles.right,
        };

        if (stick === 'left') {
          margins.left = Math.max(Math.min(margins.left + swipe.x, 0), -width);
        } else if (stick === 'right') {
          margins.right = Math.max(Math.min(margins.right - swipe.x, 0), -width);
        }

        return (
          <div
            style={{
              width: width,
              marginLeft: margins.left,
              marginRight: margins.right,
            }}
            className={classNames('mk-layout-sidebar', stick, design, { expanded, swiping: !!swipe.x })}
          >
            <div
              style={{
                width: swiper,
              }}
              className="mk-layout-sidebar__swiper"
              onMouseDown={(e) =>
                triggerSwipe?.({
                  x: e.clientX,
                  y: e.clientY,
                })
              }
              onTouchStart={(e) =>
                triggerSwipe?.({
                  x: e.touches[0].clientX,
                  y: e.touches[0].clientY,
                })
              }
            />
            <div className="mk-layout-sidebar__wrapper">
              {brand && <div className="mk-layout-sidebar__brand">{brand}</div>}
              <div className="mk-layout-sidebar__content">{children || sidebar}</div>
            </div>
          </div>
        );
      }}
    </MKSwiper>
  );
};
