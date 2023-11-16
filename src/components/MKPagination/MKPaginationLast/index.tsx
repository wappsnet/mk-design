import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKPaginationLastProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const MKPaginationLast: FC<MKPaginationLastProps> = ({ disabled, className = '', onClick, children }) => (
  <a
    rel="nofollow"
    role="tab"
    tabIndex={disabled ? -1 : 0}
    onKeyUp={onClick}
    className={classNames(['mq-pagination-last', className, { disabled }])}
    onClick={onClick}
  >
    {children}
  </a>
);
