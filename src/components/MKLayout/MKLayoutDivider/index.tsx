import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKDesignTypes } from 'types';

import { MKLayoutDividerHrStyled, MKLayoutDividerLabelStyled, MKLayoutDividerStyled } from './style';

export interface MKLayoutDividerProps {
  design?: MKDesignTypes;
  label?: ReactNode;
}

export const MKLayoutDivider: FC<MKLayoutDividerProps> = ({ design = 'primary', label }) => {
  if (label) {
    return (
      <MKLayoutDividerStyled className={clsx('mk-layout-divider', design)} design={design} labeled={!!label}>
        <MKLayoutDividerLabelStyled className="mk-layout-divider__label">{label}</MKLayoutDividerLabelStyled>
      </MKLayoutDividerStyled>
    );
  }

  return <MKLayoutDividerHrStyled className={clsx('mk-layout-divider', design)} design={design} />;
};
