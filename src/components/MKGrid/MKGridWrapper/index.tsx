import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MK_SIZES } from 'definitions';
import { MKAlignTypes, MKJustifyTypes } from 'types';

import { MKGridWrapperStyled } from './style';

export interface MKGridWrapperProps {
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  size?: keyof typeof MK_SIZES.breakPoints;
  wrap?: boolean;
  children?: ReactNode;
  className?: string;
}

export const MKGridWrapper: FC<MKGridWrapperProps> = ({
  children,
  className = '',
  size = 'xl',
  wrap = false,
  align,
  justify,
  ...props
}) => (
  <MKGridWrapperStyled
    {...props}
    className={clsx(['mk-grid-wrapper', className])}
    mkWrap={wrap}
    mkSize={size}
    mkAlign={align}
    mkJustify={justify}
  >
    {children}
  </MKGridWrapperStyled>
);
