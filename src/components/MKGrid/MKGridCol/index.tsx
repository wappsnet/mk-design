import './style.scss';

import { FC, ReactNode, useMemo } from 'react';

import classNames from 'classnames';

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

export const MKGridCol: FC<MKGridColProps> = ({ children, prefix = 'col', ...props }) => {
  const breakpoints = useMKBreakpoints();
  const minBreakpoint = useMKMinBreakpoint();

  const data = useMemo(() => {
    const classes: string[] = [];
    const spans: string[] = [];

    breakpoints.forEach((brkPoint) => {
      const propValue = props[brkPoint];
      delete props[brkPoint];

      let span: ColSize | undefined;
      let offset: NumberAttr | undefined;
      let order: ColOrder | undefined;

      if (typeof propValue === 'object' && propValue != null) {
        ({ span, offset, order } = propValue);
      } else {
        span = propValue;
      }

      const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';

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
  }, [breakpoints, minBreakpoint, props, prefix]);

  return (
    <MKGridColStyled className={classNames(['mk-grid-col', prefix, ...data.classes, ...data.spans])}>
      {children}
    </MKGridColStyled>
  );
};
