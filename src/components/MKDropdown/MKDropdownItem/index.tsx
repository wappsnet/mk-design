import { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { MKDropdownContext } from 'definitions';

import './style.scss';

export interface MKDropdownItemProps {
  children: ReactNode;
}

const MKDropdownItem: FC<MKDropdownItemProps> = ({ children }) => {
  const { variant } = useContext(MKDropdownContext);
  return <div className={classNames('mk-dropdown-item', variant)}>{children}</div>;
};

export default MKDropdownItem;
