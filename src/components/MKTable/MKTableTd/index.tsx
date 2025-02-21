import { CSSProperties, FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKTableColumnMediaProps } from 'types';

export interface MKTableTdProps {
  children?: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  style?: CSSProperties;
  breakpoints?: MKTableColumnMediaProps[];
}

export const MKTableTd: FC<MKTableTdProps> = ({ children, colSpan, rowSpan, breakpoints = [] }) => {
  const classList = useMemo(
    () => breakpoints.filter((query) => query.show).map((query) => `cell-${query.size}`),
    [breakpoints],
  );

  return (
    <td colSpan={colSpan} rowSpan={rowSpan} className={clsx(['mk-table__td', ...classList])}>
      {children}
    </td>
  );
};
