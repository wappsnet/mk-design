import './style.scss';

import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

type MKSwipeDataProps = {
  x: number;
  y: number;
};

interface MKSwiperChildrenProps {
  swipe: MKSwipeDataProps;
  triggerSwipe?: (data: MKSwipeDataProps) => void;
}

interface MKSwiperProps {
  axis?: 'x' | 'y';
  children: (data: MKSwiperChildrenProps) => ReactNode;
  onSwipe?: (data: MKSwipeDataProps) => void;
  onSwipeEnd?: (data: MKSwipeDataProps) => void;
}

export const MKSwiper: FC<MKSwiperProps> = ({ axis, children, onSwipe, onSwipeEnd }) => {
  const [startPos, seStartPos] = useState<MKSwipeDataProps | null>(null);
  const [swipePos, setSwipePos] = useState<MKSwipeDataProps>({
    x: 0,
    y: 0,
  });

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      const data = {
        x: 0,
        y: 0,
      };

      if (axis !== 'x') {
        data.y = e.clientY - (startPos?.y || 0);
      }

      if (axis !== 'y') {
        data.x = e.clientX - (startPos?.x || 0);
      }

      seStartPos(null);
      if (onSwipeEnd) {
        onSwipeEnd(data);
        setSwipePos({
          x: 0,
          y: 0,
        });
      } else {
        setSwipePos(data);
      }
    },
    [axis, onSwipeEnd, startPos?.y, startPos?.x],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      const data = {
        x: 0,
        y: 0,
      };

      if (axis !== 'x') {
        data.y = e.clientY - (startPos?.y || 0);
      }

      if (axis !== 'y') {
        data.x = e.clientX - (startPos?.x || 0);
      }

      setSwipePos(data);
      onSwipe?.(data);
    },
    [axis, onSwipe, startPos?.x, startPos?.y],
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      const data = {
        x: 0,
        y: 0,
      };

      if (axis !== 'x') {
        data.y = e.changedTouches[0].clientY - (startPos?.y || 0);
      }

      if (axis !== 'y') {
        data.x = e.changedTouches[0].clientX - (startPos?.x || 0);
      }

      seStartPos(null);
      if (onSwipeEnd) {
        onSwipeEnd(data);
        setSwipePos({
          x: 0,
          y: 0,
        });
      } else {
        setSwipePos(data);
      }
    },
    [axis, onSwipeEnd, startPos?.y, startPos?.x],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const data = {
        x: 0,
        y: 0,
      };

      if (axis !== 'x') {
        data.y = e.touches[0].clientY - (startPos?.y || 0);
      }

      if (axis !== 'y') {
        data.x = e.touches[0].clientX - (startPos?.x || 0);
      }

      setSwipePos(data);
      onSwipe?.(data);
    },
    [axis, onSwipe, startPos?.x, startPos?.y],
  );

  useEffect(() => {
    if (startPos) {
      window.addEventListener('mouseup', handleMouseUp, true);
      window.addEventListener('mousemove', handleMouseMove, true);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('mousemove', handleMouseMove, true);
    };
  }, [startPos, handleMouseUp, handleMouseMove]);

  useEffect(() => {
    if (startPos) {
      window.addEventListener('touchend', handleTouchEnd, true);
      window.addEventListener('touchmove', handleTouchMove, true);
    }

    return () => {
      window.removeEventListener('touchend', handleTouchEnd, true);
      window.removeEventListener('touchmove', handleTouchMove, true);
    };
  }, [startPos, handleTouchMove, handleTouchEnd]);

  return children({
    swipe: swipePos,
    triggerSwipe: (data) => {
      seStartPos(data);
    },
  });
};
