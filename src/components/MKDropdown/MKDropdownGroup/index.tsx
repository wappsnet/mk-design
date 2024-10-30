import { FC, ReactNode } from 'react';

import { MKDropdownGroupContentStyled, MKDropdownGroupLabelStyled, MKDropdownGroupStyled } from './style';

export interface MKDropdownItemGroupProps {
  children: ReactNode;
  label?: ReactNode;
}

export const MKDropdownGroup: FC<MKDropdownItemGroupProps> = ({ label, children }) => (
  <MKDropdownGroupStyled className="mk-dropdown-group">
    {label && (
      <MKDropdownGroupLabelStyled className="mk-dropdown-group__label">
        <label>{label}</label>
      </MKDropdownGroupLabelStyled>
    )}
    <MKDropdownGroupContentStyled className="mk-dropdown-group__content" mkCompact={!label}>
      {children}
    </MKDropdownGroupContentStyled>
  </MKDropdownGroupStyled>
);
