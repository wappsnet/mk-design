import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKDropdownContext } from 'context';
import { MKJustifyTypes } from 'types';

import { MKDropdownItemStyled } from './style';

export interface MKDropdownItemProps {
  children: ReactNode;
  justify?: MKJustifyTypes;
}

export const MKDropdownItem: FC<MKDropdownItemProps> = ({ children, justify = 'start' }) => {
  const { theme } = useContext(MKDropdownContext);

  return (
    <MKDropdownItemStyled className={classNames('mk-dropdown-item', theme, justify)} justify={justify}>
      {children}
    </MKDropdownItemStyled>
  );
};
