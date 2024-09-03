import { FC, ReactNode, useState } from 'react';

import classNames from 'classnames';

export interface MKDropdownCollapseProps {
  children: ReactNode;
}

export const MKDropdownCollapse: FC<MKDropdownCollapseProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classNames('mk-dropdown-collapse', collapsed)}>
      <div className="mk-dropdown-collapse__button" onClick={() => setCollapsed(!collapsed)} />
      <div className="mk-dropdown-collapse__content">{children}</div>
    </div>
  );
};
