import { FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface MKPaginationNextProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationNext: FC<MKPaginationNextProps> = ({ className = '', disabled, onClick, children }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-next', { disabled }, className])}
    onClick={onClick}
  >
    {children}
  </a>
);
