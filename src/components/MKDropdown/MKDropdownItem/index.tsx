import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKDropdownContext } from 'context';
import { MKJustifyTypes } from 'types';

import { MKDropdownItemStyled } from './style';

export interface MKDropdownItemProps {
  children: ReactNode;
  justify?: MKJustifyTypes;
  className?: string;
}

export const MKDropdownItem: FC<MKDropdownItemProps> = ({ children, className = '', justify = 'start' }) => {
  const { design } = useContext(MKDropdownContext);

  return (
    <MKDropdownItemStyled className={clsx('mk-dropdown-item', className)} mkDesign={design} mkJustify={justify}>
      {children}
    </MKDropdownItemStyled>
  );
};
