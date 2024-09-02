import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKThemeVariants } from 'types';

import { MKLayoutDividerHrStyled, MKLayoutDividerLabelStyled, MKLayoutDividerStyled } from './style';

export interface MKLayoutDividerProps {
  theme?: MKThemeVariants;
  label?: ReactNode;
}

export const MKLayoutDivider: FC<MKLayoutDividerProps> = ({ theme = 'primary', label }) => {
  if (label) {
    return (
      <MKLayoutDividerStyled className={classNames('mk-layout-divider', theme)} theme={theme} labeled={!!label}>
        <MKLayoutDividerLabelStyled className="mk-layout-divider__label">{label}</MKLayoutDividerLabelStyled>
      </MKLayoutDividerStyled>
    );
  }

  return <MKLayoutDividerHrStyled className={classNames('mk-layout-divider', theme)} theme={theme} />;
};
