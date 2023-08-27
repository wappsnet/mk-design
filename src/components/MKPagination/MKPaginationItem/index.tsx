import { FC, ReactNode } from 'react';
import classNames from 'classnames';

export interface MKPaginationItemProps {
  className?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const MKPaginationItem: FC<MKPaginationItemProps> = ({ className = '', active, disabled, onClick, children }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-item', className, { disabled }, { active }])}
    onClick={onClick}
  >
    {children}
  </a>
);

export default MKPaginationItem;
