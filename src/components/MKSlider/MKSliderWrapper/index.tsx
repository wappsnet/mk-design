import './style.scss';

import { Children, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import { MK_KEYBOARD_EVENT_KEYS, MK_SIZES } from 'definitions';
import { keyGen } from 'helpers';

import { MKSwiper } from 'core/MKSwiper';

import { MKSliderItem } from '../MKSliderItem';

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
  direction?: 'horizontal' | 'vertical';
  animation?: 'slide' | 'scale';
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

  const animate = useCallback(
    (index: number) => {
      switch (animation) {
        case 'scale':
          return {
            padding: gap,
            flex: active === index ? 2 : 1,
          };
        case 'slide':
        default:
          return {
            padding: gap,
            flex: `0 0 ${grow}%`,
          };
      }
    },
    [animation, gap, active, grow],
  );

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

  const handleSlideTo = (slide: number, event?: string) => {
    const newActiveSlide = Math.max(Math.min(slide, count - slidesPerSlide), 0);
    setActive(newActiveSlide);

    onSlideChange?.(newActiveSlide, slide, event);
  };

  const items = useMemo(() => data || Children.toArray(children).map((item) => item), [data, children]);

  const translate = useMemo(
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

  const styles = useMemo(
    () => ({
      padding: gap,
      transform:
        direction === 'horizontal' ? `translateX(-${translate - diff.x}%)` : `translateY(-${translate - diff.y}%)`,
    }),
    [diff.x, diff.y, direction, gap, translate],
  );

  return (
    <div
      ref={ref}
      className={classNames('mk-slider', className, direction, { animate: !diff?.x && !diff?.y })}
      onKeyDown={(event) => {
        if (MK_KEYBOARD_EVENT_KEYS.Right.includes(event.key)) {
          handleSlideTo(active + 1, event.key);
        } else if (MK_KEYBOARD_EVENT_KEYS.Left.includes(event.key)) {
          handleSlideTo(active - 1, event.key);
        }
      }}
    >
      {showButton && (
        <button
          onClick={() => {
            handleSlideTo(active - slidesPerSlide);
          }}
          disabled={active === 0 && !navigation?.firstEl}
          className="mk-slider__button prev"
          aria-label="Sidebar Prev Button"
        >
          {count - active <= slidesPerSlide && !!navigation?.firstEl ? navigation?.firstEl : navigation?.prevEl || '<'}
        </button>
      )}
      <div className="mk-slider__wrapper" tabIndex={-1}>
        <MKSwiper
          onSwipe={(pos) => {
            setPos(pos);
          }}
          onSwipeEnd={(pos) => {
            if (ref.current) {
              setPos({
                x: 0,
                y: 0,
              });

              if (pos.x) {
                handleSlideTo(active - Math.round(((pos.x / ref.current.clientWidth) * 100) / grow));
              } else if (pos.y) {
                handleSlideTo(active - Math.round(((pos.y / ref.current.clientHeight) * 100) / grow));
              }
            }
          }}
          axis={direction === 'horizontal' ? 'x' : 'y'}
        >
          {({ triggerSwipe }) => (
            <div
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
              style={styles}
            >
              {keyGen(items).map(({ item, key }, index) => {
                const styles = animate(index);
                return (
                  <div key={key} className="mk-slider__item" style={styles}>
                    <MKSliderItem
                      active={index === active}
                      slideIndex={index}
                      onFocus={(slide) => {
                        handleSlideTo(slide, 'tab');
                      }}
                    >
                      {renderItem?.(item, index) || item}
                    </MKSliderItem>
                  </div>
                );
              })}
            </div>
          )}
        </MKSwiper>
      </div>
      {showButton && (
        <button
          onClick={() => handleSlideTo(active + slidesPerSlide)}
          disabled={active + view >= count && !navigation?.lastEl}
          className="mk-slider__button next"
          aria-label="Sidebar Next Button"
        >
          {active + view >= count && !!navigation?.lastEl ? navigation.lastEl : navigation?.nextEl || '>'}
        </button>
      )}

      {bullets && items.length > 1 && (
        <div className="mk-slider__bullets">
          {keyGen(items).map(({ key }, index) => (
            <button
              key={key}
              onClick={() => handleSlideTo(index)}
              className={classNames('mk-slider__bullet', { active: activeSlide === index })}
            />
          ))}
        </div>
      )}
    </div>
  );
};
