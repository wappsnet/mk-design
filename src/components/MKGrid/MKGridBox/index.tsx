import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import { MKAlignTypes, MKGridDirectionTypes, MKJustifyTypes } from 'types';

import { MKGridBoxStyled } from './style';

export interface MKGridBoxProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MKGridDirectionTypes;
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  wrap?: boolean;
  children?: ReactNode;
}

export const MKGridBox: FC<MKGridBoxProps> = ({
  children,
  direction = 'row',
  wrap = false,
  align,
  justify,
  ...props
}) => (
  <MKGridBoxStyled
    {...props}
    className={classNames(['mk-grid-box', align, justify, direction, { wrap }])}
    wrap={wrap}
    direction={direction}
    align={align}
    justify={justify}
  >
    {children}
  </MKGridBoxStyled>
);
