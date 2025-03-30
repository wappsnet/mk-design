import { FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKGridColSizeTypes } from 'types';

import { MKGridColStyled } from './style';

type MKColOrderTypes = number | '1' | '2' | '3' | '4' | '5' | 'first' | 'last';
type MKColSpecTypes =
  | MKGridColSizeTypes
  | { span?: MKGridColSizeTypes; offset?: MKGridColSizeTypes; order?: MKColOrderTypes };

export interface MKGridColProps {
  xs?: MKColSpecTypes;
  sm?: MKColSpecTypes;
  md?: MKColSpecTypes;
  lg?: MKColSpecTypes;
  xl?: MKColSpecTypes;
  prefix?: string;
  [key: string]: any;
  children?: ReactNode;
  compact?: boolean;
}

export const MKGridCol: FC<MKGridColProps> = ({
  className = '',
  compact = false,
  expanded = false,
  prefix = 'mk-col',
  min = 'xs',
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  ...props
}) => {
  const colData = useMemo(() => {
    const classes = [prefix];

    Object.entries({ xs, sm, md, lg, xl, xxl }).forEach(([size, value]) => {
      let span;
      let offset = null;
      let order = null;

      if (typeof value === 'object') {
        ({ span, offset, order } = value);
      } else {
        span = value;
      }

      const infix = size !== min ? `-${size}` : '';

      if (!!span || span === 0) {
        classes.push(span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`);
      }

      if (order) {
        classes.push(`${prefix}-order${infix}-${order}`);
      }

      if (offset) {
        classes.push(`${prefix}-offset${infix}-${offset}`);
      }
    });

    return {
      classes,
    };
  }, [xs, sm, md, lg, xl, xxl, min, prefix]);

  return (
    <MKGridColStyled
      className={clsx(['mk-grid-col', className, ...colData.classes])}
      mkCompact={compact}
      mkExpanded={expanded}
      {...props}
    />
  );
};
