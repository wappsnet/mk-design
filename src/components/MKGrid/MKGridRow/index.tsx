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

export const MKGridRow: FC<MKGridRowProps> = ({ children, prefix = 'row', xs, sm, md, lg, xl, ...props }) => {
  const breakpoints = useMKBreakpoints();
  const minBreakpoint = useMKMinBreakpoint();

  const pointers = useMemo(
    () =>
      Object.fromEntries(
        Object.entries({
          xs,
          sm,
          md,
          lg,
          xl,
        }).flatMap(([key, value]) => {
          if (value && value !== 0) {
            return [[key, value]];
          }

          return [];
        }),
      ),
    [lg, md, sm, xl, xs],
  );

  const data = useMemo(() => {
    const classes: string[] = [];

    breakpoints.forEach((key) => {
      const value = pointers[key];

      let cols;
      if (value != null && typeof value === 'object') {
        ({ cols } = value);
      } else {
        cols = value;
      }

      const infix = key !== minBreakpoint ? `-${key}` : '';

      if (cols != null) {
        classes.push(`${prefix}${infix}-${cols}`);
      }
    });

    return {
      classes,
    };
  }, [breakpoints, minBreakpoint, pointers, prefix]);

  return (
    <MKGridRowStyled {...props} className={clsx(['mk-grid-row', prefix, ...data.classes])}>
      {children}
    </MKGridRowStyled>
  );
};
