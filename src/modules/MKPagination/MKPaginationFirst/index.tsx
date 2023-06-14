import { FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface MKPaginationFirstProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const MKPaginationFirst: FC<MKPaginationFirstProps> = ({ className = '', disabled, onClick, children }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-first', className, { disabled }])}
    onClick={onClick}
  >
    {children}
  </a>
);

export default MKPaginationFirst;
