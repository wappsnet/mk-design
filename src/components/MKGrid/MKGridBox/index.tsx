import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKAlignTypes, MKGridDirectionTypes, MKJustifyTypes } from 'types';

import { MKGridBoxStyled } from './style';

export interface MKGridBoxProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MKGridDirectionTypes;
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  wrap?: boolean;
  className?: string;
  children?: ReactNode;
}

export const MKGridBox: FC<MKGridBoxProps> = ({
  children,
  className = '',
  direction = 'row',
  wrap = false,
  align,
  justify,
  ...props
}) => (
  <MKGridBoxStyled
    {...props}
    className={clsx(['mk-grid-box', className])}
    mkWrap={wrap}
    mkDirection={direction}
    mkAlign={align}
    mkJustify={justify}
  >
    {children}
  </MKGridBoxStyled>
);
