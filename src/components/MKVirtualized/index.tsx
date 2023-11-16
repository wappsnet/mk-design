import { FC, ReactNode, useMemo, useRef, useState } from 'react';

import { debounce } from 'lodash';

export interface MKVirtualizedDataProps<T = any> {
  before: number;
  after: number;
  visible: T[];
}

export interface MKVirtualizedMetaProps {
  scroll: (pos: number) => void;
}

export interface MKVirtualizedProps<T = any> {
  items: T[];
  children: (data: MKVirtualizedDataProps, meta: MKVirtualizedMetaProps) => ReactNode;
  itemHeight?: number;
  size?: number;
  buffer?: number;
  throttle?: number;
}

const MKVirtualized: FC<MKVirtualizedProps> = ({ items, children, throttle = 100, size = 100, itemHeight = 50 }) => {
  const [offset, setOffset] = useState({
    start: 0,
    end: Math.min(size, items.length),
  });

  const scroll = useRef(
    debounce((pos: number) => {
      const startIndex = Math.max(Math.ceil(pos / itemHeight), 0);
      const endIndex = Math.min(Math.ceil((pos + size * itemHeight) / itemHeight), items.length);

      setOffset((prevState) => ({
        ...prevState,
        start: startIndex,
        end: endIndex,
      }));
    }, throttle),
  );

  const virtualized = useMemo(
    () => ({
      before: offset.start,
      visible: items.slice(offset.start, offset.end),
      after: items.length - offset.end,
    }),
    [offset.start, offset.end, items],
  );

  console.log(offset, virtualized);

  return (
    <>
      {children(virtualized, {
        scroll: (pos) => scroll.current(pos),
      })}
    </>
  );
};

export default MKVirtualized;
