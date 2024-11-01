import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKPaginationLinkStyled } from './style';

export interface MKPaginationFirstProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationLink: FC<MKPaginationFirstProps> = ({
  className = '',
  disabled = false,
  onClick,
  children,
}) => (
  <MKPaginationLinkStyled
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={clsx(['mk-pagination-link', className])}
    onClick={onClick}
    mkDisabled={disabled}
  >
    {children}
  </MKPaginationLinkStyled>
);
