import { FC } from 'react';
import classNames from 'classnames';

export interface MKPaginationEllipsisProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MKPaginationEllipsis: FC<MKPaginationEllipsisProps> = ({ className = '', disabled, onClick }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mk-pagination-ellipsis', className, { disabled }])}
    onClick={onClick}
  >
    {'•••'}
  </a>
);

export default MKPaginationEllipsis;
