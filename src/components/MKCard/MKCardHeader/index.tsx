import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKCardContext } from 'context';
import { MKJustifyTypes } from 'types';

import { MKCardHeaderStyled } from './style';

export interface MKCardHeaderProps {
  className?: string;
  children?: ReactNode;
  wrap?: boolean;
  justify?: MKJustifyTypes;
}

export const MKCardHeader: FC<MKCardHeaderProps> = ({
  className = '',
  justify = 'space-between',
  children,
  wrap = false,
}) => {
  const { compact, stripped } = useContext(MKCardContext);
  return (
    <MKCardHeaderStyled
      data-testid="mk-card-header"
      className={clsx(['mk-card-header', className])}
      mkHighlighted={stripped}
      mkCompact={compact}
      mkJustify={justify}
      mkWrap={wrap}
    >
      {children}
    </MKCardHeaderStyled>
  );
};
