import { Children, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import { MKSliderContext } from 'context';
import { MK_KEYBOARD_EVENT_KEYS, MK_SIZES } from 'definitions';
import { keyGen } from 'helpers';
import { MKAnimationTypes, MKOrientationTypes, MKPositionProps } from 'types';

import { MKSwiper } from 'core/MKSwiper';

import { MKSliderItem } from '../MKSliderItem';

import {
  MKSliderBulletsStyled,
  MKSliderBulletStyled,
  MKSliderButtonStyled,
  MKSliderInnerStyled,
  MKSliderItemStyled,
  MKSliderStyled,
  MKSliderWrapperStyled,
} from './style';

export type MKSliderBreakPoint = {
  size: keyof typeof MK_SIZES.breakPoints;
  count: number;
};

export type MKSliderNavigation = {
  prevEl?: ReactNode;
  nextEl?: ReactNode;
  lastEl?: ReactNode;
  firstEl?: ReactNode;
};

export type MKSliderWrapperProps = {
  className?: string;
  data?: ReactNode[];
  gap?: number;
  sliding?: boolean;
  bullets?: boolean;
  navigation?: MKSliderNavigation;
  direction?: MKOrientationTypes;
  animation?: MKAnimationTypes;
  breakPoints?: MKSliderBreakPoint[];
  slidesPerView?: number;
  slidesPerSlide?: number;
  autoAdjustHeight?: boolean;
  slideOnClick?: boolean;
  showButton?: boolean;
  activeSlide?: number;
  onSlideChange?: (slide: number, next: number, keyEvent?: string) => void;
  renderItem?: (data: ReactNode, index: number) => ReactNode;
  children?: ReactNode;
};

export const MKSliderWrapper: FC<MKSliderWrapperProps> = ({
  className = '',
  direction = 'horizontal',
  animation = 'slide',
  navigation,
  data,
  bullets = false,
  breakPoints = [
    {
      size: 'lg',
      count: 5,
    },
    {
      size: 'md',
      count: 3,
    },
    {
      size: 'xs',
      count: 3,
    },
  ],
  gap = 0,
  activeSlide = 0,
  showButton = false,
  slidesPerView = 5,
  slidesPerSlide = 1,
  autoAdjustHeight = true,
  onSlideChange,
  renderItem,
  children,
}) => {
  const [active, setActive] = useState(activeSlide);
  const [view, setView] = useState(slidesPerView);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const count = useMemo(() => data?.length || Children.count(children), [children, data?.length]);
  const grow = useMemo(() => 100 / Math.min(count, view), [view, count]);

  const handleResize = useCallback(() => {
    const calculateSlidesToShow = (windowWidth: number) => {
      let slidesToShow = 1;
      Object.entries(breakPoints).forEach(([breakpoint, config]) => {
        if (windowWidth >= parseInt(breakpoint)) {
          slidesToShow = config.count;
        }
      });

      return slidesToShow;
    };

    setView(calculateSlidesToShow(window.innerWidth));
  }, [breakPoints]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current?.clientWidth) {
        const width = ref.current.clientWidth;
        const ordered = breakPoints.sort(
          (a, b) => MK_SIZES.breakPoints[b.size].size - MK_SIZES.breakPoints[a.size].size,
        );

        const point = ordered?.find((item) => MK_SIZES.breakPoints[item.size].size < width);

        if (point) {
          setView(point.count);
        }
      }
    };

    const observer = new ResizeObserver(handleResize);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [breakPoints, autoAdjustHeight]);

  const handleSlideTo = useCallback(
    (slide: number, event?: string) => {
      const newActiveSlide = Math.max(Math.min(slide, count - slidesPerSlide), 0);
      setActive(newActiveSlide);

      onSlideChange?.(newActiveSlide, slide, event);
    },
    [count, onSlideChange, slidesPerSlide],
  );

  const handleSwipeEnd = useCallback(
    (data: MKPositionProps) => {
      if (ref.current) {
        setPos({
          x: 0,
          y: 0,
        });

        if (data.x) {
          handleSlideTo(active - Math.round(((data.x / ref.current.clientWidth) * 100) / grow));
        } else if (data.y) {
          handleSlideTo(active - Math.round(((data.y / ref.current.clientHeight) * 100) / grow));
        }
      }
    },
    [active, grow, handleSlideTo],
  );

  const items = useMemo(() => data || Children.toArray(children).map((item) => item), [data, children]);

  const shake = useMemo(
    () =>
      Math.min(
        Math.max((count - slidesPerSlide) * grow - count * (view - Math.floor(view)) * grow, 0),
        Math.min(active, count - slidesPerSlide) * grow,
      ),
    [count, slidesPerSlide, grow, view, active],
  );

  const diff = useMemo(() => {
    if (ref.current) {
      return {
        x: (pos.x / ref.current?.clientWidth) * 100,
        y: (pos.y / ref.current?.clientWidth) * 100,
      };
    }

    return {
      x: 0,
      y: 0,
    };
  }, [pos]);

  const buttons = useMemo(
    () => ({
      prev: {
        visible: showButton,
        label:
          count - active <= slidesPerSlide && !!navigation?.firstEl ? navigation?.firstEl : navigation?.prevEl || '<',
      },
      next: {
        visible: showButton,
        label: active + view >= count && !!navigation?.lastEl ? navigation.lastEl : navigation?.nextEl || '>',
      },
    }),
    [
      active,
      count,
      navigation?.firstEl,
      navigation?.lastEl,
      navigation?.nextEl,
      navigation?.prevEl,
      showButton,
      slidesPerSlide,
      view,
    ],
  );

  return (
    <MKSliderContext.Provider
      value={{
        direction,
        animation,
      }}
    >
      <MKSliderStyled
        ref={ref}
        className={classNames('mk-slider', className, direction, { animate: !diff?.x && !diff?.y })}
        onKeyDown={(event) => {
          if (MK_KEYBOARD_EVENT_KEYS.Right.includes(event.key)) {
            handleSlideTo(active + 1, event.key);
          } else if (MK_KEYBOARD_EVENT_KEYS.Left.includes(event.key)) {
            handleSlideTo(active - 1, event.key);
          }
        }}
        direction={direction}
        animation={animation}
      >
        {buttons.prev.visible && (
          <MKSliderButtonStyled
            onClick={() => {
              handleSlideTo(active - slidesPerSlide);
            }}
            direction={direction}
            disabled={active === 0 && !navigation?.firstEl}
            className="mk-slider__button prev"
            aria-label="Sidebar Prev Button"
            slideType="prev"
          >
            {buttons.prev.label}
          </MKSliderButtonStyled>
        )}
        <MKSliderWrapperStyled className="mk-slider__wrapper" tabIndex={-1} direction={direction}>
          <MKSwiper
            onSwipe={(pos) => {
              setPos(pos);
            }}
            onSwipeEnd={(data) => {
              handleSwipeEnd({
                x: data.x,
                y: data.y,
              });
            }}
            axis={direction === 'horizontal' ? 'x' : 'y'}
          >
            {({ triggerSwipe }) => (
              <MKSliderInnerStyled
                className="mk-slider__inner"
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
                diffX={diff.x}
                diffY={diff.x}
                shake={shake}
                gap={gap}
                direction={direction}
              >
                {keyGen(items).map(({ item, key }, index) => (
                  <MKSliderItemStyled
                    key={key}
                    className="mk-slider__item"
                    active={active === index}
                    grow={grow}
                    gap={gap}
                    animation={animation}
                    direction={direction}
                  >
                    <MKSliderItem
                      active={index === active}
                      slideIndex={index}
                      onFocus={(slide) => {
                        handleSlideTo(slide, 'tab');
                      }}
                    >
                      {renderItem?.(item, index) || item}
                    </MKSliderItem>
                  </MKSliderItemStyled>
                ))}
              </MKSliderInnerStyled>
            )}
          </MKSwiper>
        </MKSliderWrapperStyled>
        {buttons.next.visible && (
          <MKSliderButtonStyled
            direction={direction}
            slideType="next"
            onClick={() => handleSlideTo(active + slidesPerSlide)}
            disabled={active + view >= count && !navigation?.lastEl}
            className="mk-slider__button next"
            aria-label="Sidebar Next Button"
          >
            {buttons.next.label}
          </MKSliderButtonStyled>
        )}

        {bullets && items.length > 1 && (
          <MKSliderBulletsStyled className="mk-slider__bullets" direction={direction}>
            {keyGen(items).map(({ key }, index) => (
              <MKSliderBulletStyled
                key={key}
                onClick={() => handleSlideTo(index)}
                className={classNames('mk-slider__bullet', {
                  active: active === index,
                })}
                active={active === index}
              />
            ))}
          </MKSliderBulletsStyled>
        )}
      </MKSliderStyled>
    </MKSliderContext.Provider>
  );
};
