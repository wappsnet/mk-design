import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKChildIconProps, MKShapeTypes, MKDesignTypes } from 'types';

import { MKSpin } from 'core/MKSpin';

import { MKButtonIconStyled, MKButtonLabelStyled, MKButtonStyled } from './style';

export interface MKButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: MKDesignTypes;
  shape?: MKShapeTypes;
  stretch?: boolean;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  truncate?: boolean;
  blank?: boolean;
  icon?: MKChildIconProps;
}

export const MKButton: FC<MKButtonProps> = ({
  design = 'primary',
  shape = 'base',
  stretch = false,
  loading = false,
  disabled = false,
  truncate = true,
  blank = false,
  children,
  onClick,
  icon,
  type = 'button',
  className = '',
}) => (
  <MKButtonStyled
    type={type}
    className={clsx('mk-button', className)}
    mkStretch={stretch}
    mkLoading={loading}
    disabled={disabled || loading}
    mkTruncate={truncate}
    mkBlank={blank}
    mkShape={shape}
    mkDesign={design}
    onClick={(e) => {
      if (!disabled && !loading) {
        onClick?.(e);
      }
    }}
  >
    {icon?.position === 'start' && (
      <MKButtonIconStyled className="mk-button__start-icon">{icon.node}</MKButtonIconStyled>
    )}
    {children && (
      <MKButtonLabelStyled mkTruncate={truncate} className="mk-button__label">
        {children}
      </MKButtonLabelStyled>
    )}
    {loading && <MKSpin animate="border" size="xs" />}
    {icon?.position === 'end' && <MKButtonIconStyled className="mk-button__end-icon">{icon.node}</MKButtonIconStyled>}
  </MKButtonStyled>
);
