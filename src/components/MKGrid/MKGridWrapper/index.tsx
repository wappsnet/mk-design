import { FC, ReactNode } from 'react';

import classNames from 'classnames';

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
    className={classNames(['mk-grid-wrapper', align, justify, { wrap }])}
    wrap={wrap}
    size={size}
    align={align}
    justify={justify}
  >
    {children}
  </MKGridWrapperStyled>
);
