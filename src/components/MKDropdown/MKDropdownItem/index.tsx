import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

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
    <MKDropdownItemStyled className={clsx('mk-dropdown-item', theme, justify)} justify={justify}>
      {children}
    </MKDropdownItemStyled>
  );
};
