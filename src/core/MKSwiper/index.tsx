import { FC, ReactNode, useEffect, useState } from 'react';

type MKSwipeDataProps = {
  x: number;
  y: number;
};

type MKSwiperProps = {
  direction?: 'x' | 'y' | 'xy';
  children: ReactNode;
  onSwipe: (data: MKSwipeDataProps) => void;
};

const MKSwiper: FC<MKSwiperProps> = ({ direction, children, onSwipe }) => {
  const [startPos, seStartPos] = useState<MKSwipeDataProps | null>();
  const [currentPos, setCurrentPos] = useState<MKSwipeDataProps | null>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const data = {
        x: 0,
        y: 0,
      };

      if (direction !== 'x') {
        data.y = e.y - (startPos?.y || 0);
      }

      if (direction !== 'y') {
        data.x = e.x - (startPos?.x || 0);
      }

      onSwipe(data);
      setCurrentPos(null);
      seStartPos(null);
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.stopPropagation();

      setCurrentPos(() => {
        const data = {
          x: 0,
          y: 0,
        };

        if (direction !== 'x') {
          data.y = e.y - (startPos?.y || 0);
        }

        if (direction !== 'y') {
          data.x = e.x - (startPos?.x || 0);
        }

        return data;
      });
    };

    if (startPos) {
      window.addEventListener('mouseup', handleMouseUp, true);
      window.addEventListener('mousemove', handleMouseMove, true);
    } else {
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('mousemove', handleMouseMove, true);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('mousemove', handleMouseMove, true);
    };
  }, [startPos, direction, onSwipe]);

  return (
    <div
      style={{
        transform: `translate(${currentPos?.x || 0}px, ${currentPos?.y || 0}px)`,
      }}
      className="mk-swiper"
      onMouseDown={(e) =>
        seStartPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      {children}
    </div>
  );
};

export default MKSwiper;
