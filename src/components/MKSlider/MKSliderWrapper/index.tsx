import './style.scss';

import { Children, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

import { keyGen } from 'helpers';

import { MKIcon } from 'core/MKIcon';
import { MKSwiper } from 'core/MKSwiper';

import { MKSliderItem } from '../MKSliderItem';

export interface MKSliderItemDataProps {
  node: ReactNode;
}

export interface MKSliderBreakPoint {
  size: number;
  count: number;
}

export interface MKSliderWrapperProps {
  className?: string;
  data?: MKSliderItemDataProps[];
  gap?: number;
  direction?: 'horizontal' | 'vertical';
  animation?: 'slide' | 'scale';
  breakPoints?: MKSliderBreakPoint[];
  slidesPerView?: number;
  slidesPerSlide?: number;
  autoAdjustHeight?: boolean;
  slideOnClick?: boolean;
  showButtons?: boolean;
  sliderPrevButton?: ReactNode;
  sliderNextButton?: ReactNode;
  activeSlide: number;
  onSlideChange?: (slide: number) => void;
  renderItem?: (data: MKSliderItemDataProps, index: number) => ReactNode;
  children?: ReactNode;
}

export const MKSliderWrapper: FC<MKSliderWrapperProps> = ({
  className = '',
  direction = 'horizontal',
  animation = 'slide',
  data,
  breakPoints = [
    {
      size: 900,
      count: 5,
    },
    {
      size: 500,
      count: 3,
    },
    {
      size: 0,
      count: 3,
    },
  ],
  gap = 10,
  activeSlide = 0,
  showButtons = false,
  sliderNextButton,
  sliderPrevButton,
  slidesPerView = 5,
  slidesPerSlide = 1,
  autoAdjustHeight = true,
  onSlideChange,
  slideOnClick = true,
  renderItem,
  children,
}) => {
  const [active, setActive] = useState(activeSlide);
  const [view, setView] = useState(slidesPerView);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const count = useMemo(() => data?.length || Children.count(children), [children, data?.length]);
  const grow = useMemo(() => 100 / Math.min(count, view), [view, count]);

  const swipeAxis = useMemo(() => {
    if (direction === 'horizontal') {
      return 'x';
    } else if (direction === 'vertical') {
      return 'y';
    }
  }, [direction]);

  const animate = useCallback(
    (index: number) => {
      switch (animation) {
        case 'scale':
          return {
            padding: gap,
            flex: `0 0 ${grow}%`,
            transform: active === index ? `scale(1.2)` : `scale(1)`,
          };
        case 'slide':
        default:
          return {
            padding: gap,
            flex: `0 0 ${grow}%`,
          };
      }
    },
    [gap, grow, animation, active],
  );

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

  useEffect(() => {
    setActive(activeSlide);
  }, [activeSlide]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current?.clientWidth) {
        const width = ref.current.clientWidth;
        const point = breakPoints?.find((item) => item.size < width);

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
    (slide: number) => {
      const newActiveSlide = Math.max(Math.min(slide, count - 1), 0);
      setActive(newActiveSlide);
      onSlideChange?.(newActiveSlide);
    },
    [count, onSlideChange],
  );

  return (
    <div ref={ref} className={classNames('mk-slider', className, direction)}>
      {showButtons && (
        <button
          onClick={() => {
            handleSlideTo(active - slidesPerSlide);
          }}
          disabled={active === 0}
          className="mk-slider__button prev"
        >
          {sliderPrevButton || <MKIcon icon="angle-left" />}
        </button>
      )}
      <div className="mk-slider__wrapper">
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
          axis={swipeAxis}
        >
          {({ triggerSwipe }) => (
            <div
              className="mk-slider__swiper"
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
            >
              <div
                className="mk-slider__inner"
                style={{
                  padding: gap,
                  transform:
                    direction === 'horizontal'
                      ? `translateX(-${translate - diff.x}%)`
                      : `translateY(-${translate - diff.y}%)`,
                }}
              >
                {keyGen(data)?.map(({ item, key }, index) => {
                  const styles = animate(index);
                  return (
                    <div key={key} className="mk-slider__item" style={styles}>
                      <MKSliderItem
                        active={index === activeSlide}
                        slideIndex={index}
                        onClick={(slide) => {
                          slideOnClick && handleSlideTo(slide);
                        }}
                      >
                        {renderItem?.(item, index) || item.node}
                      </MKSliderItem>
                    </div>
                  );
                })}
                {children}
              </div>
            </div>
          )}
        </MKSwiper>
      </div>

      {showButtons && (
        <button
          onClick={() => {
            if (active !== count) {
              handleSlideTo(active + slidesPerSlide);
            }
          }}
          disabled={active === count}
          className="mk-slider__button next"
        >
          {sliderNextButton || <MKIcon icon="angle-right" />}
        </button>
      )}
    </div>
  );
};
