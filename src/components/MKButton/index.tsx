import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKChildIconProps, MKShapeVariants, MKThemeVariants } from 'types';

import { MKSpin } from '../../core';

import { MKButtonIconStyled, MKButtonLabelStyled, MkButtonStyled } from './style';

export interface MKButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: MKThemeVariants;
  shape?: MKShapeVariants;
  stretch?: boolean;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  truncate?: boolean;
  blank?: boolean;
  icon?: MKChildIconProps;
}

export const MKButton: FC<MKButtonProps> = ({
  theme = 'primary',
  shape = 'round',
  stretch = false,
  loading = false,
  disabled = false,
  truncate = true,
  blank = false,
  children,
  onClick,
  icon,
  className = '',
}) => (
  <MkButtonStyled
    className={classNames('mk-button', { loading }, className)}
    stretch={stretch}
    disabled={disabled || loading}
    truncate={truncate}
    blank={blank}
    shape={shape}
    theme={theme}
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
      <MKButtonLabelStyled truncate={truncate} className="mk-button__label">
        {children}
      </MKButtonLabelStyled>
    )}
    {loading && <MKSpin shape="border" size="xs" />}
    {icon?.position === 'end' && <MKButtonIconStyled className="mk-button__end-icon">{icon.node}</MKButtonIconStyled>}
  </MkButtonStyled>
);
