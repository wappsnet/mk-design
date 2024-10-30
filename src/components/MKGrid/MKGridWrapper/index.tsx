import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MK_SIZES } from 'definitions';
import { MKAlignTypes, MKJustifyTypes } from 'types';

import { MKGridWrapperStyled } from './style';

type MKGridWrapperProps = {
  align?: MKAlignTypes;
  justify?: MKJustifyTypes;
  size?: keyof typeof MK_SIZES.breakPoints;
  wrap?: boolean;
  children?: ReactNode;
};

export const MKGridWrapper: FC<MKGridWrapperProps> = ({ children, size = 'xl', wrap = false, align, justify }) => (
  <MKGridWrapperStyled
    className={clsx(['mk-grid-wrapper', align, justify, { wrap }])}
    mkWrap={wrap}
    mkSize={size}
    mkAlign={align}
    mkJustify={justify}
  >
    {children}
  </MKGridWrapperStyled>
);
