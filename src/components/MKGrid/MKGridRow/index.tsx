import { FC, useMemo } from 'react';

import { clsx } from 'clsx';

import { useMKBreakpoints, useMKMinBreakpoint } from 'hooks';

import { MKGridRowStyled } from './style';

type RowColWidth = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
type RowColumns = RowColWidth | { cols?: RowColWidth };

type MKGridRowProps = {
  xs?: RowColumns;
  sm?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  xl?: RowColumns;
  prefix?: string;
  [key: string]: any;
};

export const MKGridRow: FC<MKGridRowProps> = ({ children, prefix = 'row', ...props }) => {
  const breakpoints = useMKBreakpoints();
  const minBreakpoint = useMKMinBreakpoint();

  const data = useMemo(() => {
    const classes: string[] = [];

    breakpoints.forEach((brkPoint) => {
      const propValue = props[brkPoint];
      delete props[brkPoint];

      let cols;
      if (propValue != null && typeof propValue === 'object') {
        ({ cols } = propValue);
      } else {
        cols = propValue;
      }

      const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';

      if (cols != null) {
        classes.push(`${prefix}${infix}-${cols}`);
      }
    });

    return {
      classes,
    };
  }, [breakpoints, minBreakpoint, prefix, props]);

  return <MKGridRowStyled className={clsx(['mk-grid-row', prefix, ...data.classes])}>{children}</MKGridRowStyled>;
};
