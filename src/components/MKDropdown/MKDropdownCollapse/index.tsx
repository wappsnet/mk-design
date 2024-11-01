import { FC, ReactNode, useState } from 'react';

import { clsx } from 'clsx';

export interface MKDropdownCollapseProps {
  children: ReactNode;
  className?: string;
}

export const MKDropdownCollapse: FC<MKDropdownCollapseProps> = ({ children, className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={clsx('mk-dropdown-collapse', className)}>
      <div className="mk-dropdown-collapse__button" onClick={() => setCollapsed(!collapsed)} />
      <div className="mk-dropdown-collapse__content">{children}</div>
    </div>
  );
};
