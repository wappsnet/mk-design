import { FC, ReactNode } from 'react';

import './style.scss';

export interface MKDropdownItemGroupProps {
  children: ReactNode;
  label?: ReactNode;
}

const MKDropdownItemGroup: FC<MKDropdownItemGroupProps> = ({ label, children }) => (
  <div className="mk-dropdown-group">
    {label && (
      <div className="mk-dropdown-group__label">
        <label>{label}</label>
      </div>
    )}
    <div className="mk-dropdown-group__content">{children}</div>
  </div>
);

export default MKDropdownItemGroup;
