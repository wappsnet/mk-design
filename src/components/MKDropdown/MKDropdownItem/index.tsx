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
  const { design } = useContext(MKDropdownContext);

  return (
    <MKDropdownItemStyled className={clsx('mk-dropdown-item', design, justify)} mkJustify={justify}>
      {children}
    </MKDropdownItemStyled>
  );
};
