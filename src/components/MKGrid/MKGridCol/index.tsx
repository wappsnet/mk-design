import { FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { useMKBreakpoints, useMKMinBreakpoint } from 'hooks';

import { MKGridColStyled } from './style';

type NumberAttr = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type ColOrderNumber = number | '1' | '2' | '3' | '4' | '5';
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColSize = boolean | 'auto' | NumberAttr;
type ColSpec = ColSize | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

type MKGridColProps = {
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
  xl?: ColSpec;
  prefix?: string;
  [key: string]: any;
  children?: ReactNode;
};

export const MKGridCol: FC<MKGridColProps> = ({ children, prefix = 'col', xs, sm, md, lg, xl, ...props }) => {
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
    const spans: string[] = [];

    breakpoints.forEach((key) => {
      const value = pointers[key];

      let span: ColSize | undefined;
      let offset: NumberAttr | undefined;
      let order: ColOrder | undefined;

      if (typeof value === 'object' && value != null) {
        ({ span, offset, order } = value);
      } else {
        span = value;
      }

      const infix = key !== minBreakpoint ? `-${key}` : '';

      if (span) {
        spans.push(span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`);
      }

      if (order != null) {
        classes.push(`order${infix}-${order}`);
      }

      if (offset != null) {
        classes.push(`offset${infix}-${offset}`);
      }
    });

    return {
      classes,
      spans,
    };
  }, [breakpoints, pointers, minBreakpoint, prefix]);

  return (
    <MKGridColStyled className={clsx(['mk-grid-col', prefix, ...data.classes, ...data.spans])} {...props}>
      {children}
    </MKGridColStyled>
  );
};
