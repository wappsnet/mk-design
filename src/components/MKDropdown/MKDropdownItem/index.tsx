import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKDropdownContext } from 'definitions';

export interface MKDropdownItemProps {
  children: ReactNode;
  justify?: 'start' | 'end' | 'center';
}

export const MKDropdownItem: FC<MKDropdownItemProps> = ({ children, justify = 'start' }) => {
  const { design } = useContext(MKDropdownContext);
  return <div className={classNames('mk-dropdown-item', design, `justify-${justify}`)}>{children}</div>;
};
