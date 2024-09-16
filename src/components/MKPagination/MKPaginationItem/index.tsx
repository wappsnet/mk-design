import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKPaginationItemStyled } from './style';

export interface MKPaginationItemProps {
  className?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationItem: FC<MKPaginationItemProps> = ({
  className = '',
  active,
  disabled,
  onClick,
  children,
}) => (
  <MKPaginationItemStyled
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-item', className, { disabled, active }])}
    onClick={onClick}
    active={active}
    disabled={disabled}
  >
    {children}
  </MKPaginationItemStyled>
);
