import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKPaginationLinkStyled } from './style';

export interface MKPaginationFirstProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationLink: FC<MKPaginationFirstProps> = ({ className = '', disabled, onClick, children }) => (
  <MKPaginationLinkStyled
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-link', className, { disabled }])}
    onClick={onClick}
  >
    {children}
  </MKPaginationLinkStyled>
);
