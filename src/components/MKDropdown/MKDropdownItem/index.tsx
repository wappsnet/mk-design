import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKDropdownContext } from 'definitions';

export interface MKDropdownItemProps {
  children: ReactNode;
}

export const MKDropdownItem: FC<MKDropdownItemProps> = ({ children }) => {
  const { design } = useContext(MKDropdownContext);
  return <div className={classNames('mk-dropdown-item', design)}>{children}</div>;
};
