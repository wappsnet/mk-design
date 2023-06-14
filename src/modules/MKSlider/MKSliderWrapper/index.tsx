import { Children, FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import MKSliderItem from '../MKSliderItem';
import './style.scss';
import MKSwiper from '../../../core/MKSwiper';

type MKSliderItemDataProps = {
  node: ReactNode;
};

type MKSliderBreakPoint = {
  size: number;
  count: number;
};

type MKSliderWrapperProps = {
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
};

const MKSliderWrapper: FC<MKSliderWrapperProps> = ({
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
  const ref = useRef<HTMLDivElement>(null);

  const count = useMemo(() => {
    return data?.length || Children.count(children);
  }, [children, data]);

  const grow = useMemo(() => {
    if (count <= view) {
      return 100 / count;
    }

    return 100 / view;
  }, [view, count]);

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
          {sliderPrevButton || '<'}
        </button>
      )}
      <div className="mk-slider__wrapper">
        <MKSwiper
          onSwipe={(data) => {
            if (ref.current) {
              if (data.x) {
                handleSlideTo(active - Math.round(((data.x / ref.current.clientWidth) * 100) / grow));
              } else if (data.y) {
                handleSlideTo(active - Math.round(((data.y / ref.current.clientHeight) * 100) / grow));
              }
            }
          }}
          direction={direction === 'horizontal' ? 'x' : 'y'}
        >
          <div
            className="mk-slider__inner"
            style={{
              padding: gap,
              transform:
                direction === 'horizontal'
                  ? `translateX(-${Math.min(active, count - view) * grow || 0}%)`
                  : `translateY(-${Math.min(active, count - view) * grow || 0}%)`,
            }}
          >
            {data?.map((item, index) => {
              const styles = animate(index);
              return (
                <div key={index} className="mk-slider__item" style={styles}>
                  <MKSliderItem
                    key={index}
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
          {sliderNextButton || '>'}
        </button>
      )}
    </div>
  );
};

export default MKSliderWrapper;
