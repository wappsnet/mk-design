import { FC, useEffect, useRef, useState } from 'react';

interface MQAnimateCountProps {
  step?: number;
  start?: number;
  value: number;
  delay?: number;
}

const MQAnimateCount: FC<MQAnimateCountProps> = ({ step = 1, start = 0, value, delay = 50 }) => {
  const [count, setCount] = useState(start);
  const interval = useRef(0);

  useEffect(() => {
    setCount((prev) => {
      if (prev && value !== prev) {
        return start;
      }

      return value;
    });
  }, [step, start, value]);

  useEffect(() => {
    window.clearInterval(interval.current);
    if (value !== count) {
      interval.current = window.setInterval(
        () =>
          setCount((prev) => {
            return Math.min(value, prev + step);
          }),
        delay,
      );
    } else {
      window.clearInterval(interval.current);
    }
  }, [interval, delay, count, value, step]);

  return <>{count}</>;
};

export default MQAnimateCount;
