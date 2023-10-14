import { FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface MKPaginationPrevProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationPrev: FC<MKPaginationPrevProps> = ({ className = '', disabled, onClick, children }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-prev', { disabled }, className])}
    onClick={onClick}
  >
    {children}
  </a>
);
