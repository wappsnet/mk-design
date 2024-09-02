import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

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
  justify = 'stretch',
  children,
  wrap = false,
}) => {
  const { compact, stripped } = useContext(MKCardContext);
  return (
    <MKCardHeaderStyled
      data-testid="mk-card-header"
      className={classNames(['mk-card-header', className, justify, { wrap, compact, highlighted: stripped }])}
      highlighted={stripped}
      compact={compact}
      justify={justify}
      wrap={wrap}
    >
      {children}
    </MKCardHeaderStyled>
  );
};
