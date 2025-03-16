import { FC, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKSizeTypes } from 'types';

import { MKGridRowStyled } from './style';

type MKRowColSizeTypes = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
type MKRowColumnProps = MKRowColSizeTypes | { cols?: MKRowColSizeTypes };

export interface MKGridRowProps {
  xs?: MKRowColumnProps;
  sm?: MKRowColumnProps;
  md?: MKRowColumnProps;
  lg?: MKRowColumnProps;
  xl?: MKRowColumnProps;
  xxl?: MKRowColumnProps;
  prefix?: string;
  min?: MKSizeTypes;
  [key: string]: any;
}

export const MKGridRow: FC<MKGridRowProps> = ({
  children,
  prefix = 'row',
  min = 'xs',
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  ...props
}) => {
  const data = useMemo(() => {
    const classes: string[] = [];

    Object.entries({ xs, sm, md, lg, xl, xxl }).forEach(([key, value]) => {
      let cols;
      if (value != null && typeof value === 'object') {
        ({ cols } = value);
      } else {
        cols = value;
      }

      const infix = key !== min ? `-${key}` : '';

      if (cols != null) {
        classes.push(`${prefix}${infix}-${cols}`);
      }
    });

    return {
      classes,
    };
  }, [lg, md, sm, xl, xs, xxl, min, prefix]);

  return (
    <MKGridRowStyled {...props} className={clsx(['mk-grid-row', prefix, ...data.classes])}>
      {children}
    </MKGridRowStyled>
  );
};
