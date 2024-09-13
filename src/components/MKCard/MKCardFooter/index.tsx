import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKCardContext } from 'context';
import { MKJustifyTypes } from 'types';

import { MKCardFooterStyled } from './style';

export interface MKCardFooterProps {
  className?: string;
  children?: ReactNode;
  wrap?: boolean;
  justify?: MKJustifyTypes;
}

export const MKCardFooter: FC<MKCardFooterProps> = ({
  className = '',
  justify = 'space-between',
  children,
  wrap = false,
}) => {
  const { compact, stripped } = useContext(MKCardContext);
  return (
    <MKCardFooterStyled
      data-testid="mk-card-footer"
      className={classNames(['mk-card-footer', className, justify, { wrap, compact, highlighted: stripped }])}
      highlighted={stripped}
      compact={compact}
      justify={justify}
      wrap={wrap}
    >
      {children}
    </MKCardFooterStyled>
  );
};
