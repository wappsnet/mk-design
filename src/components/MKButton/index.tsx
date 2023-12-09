import './style.scss';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKChildIconProps, MKShapeVariants, MKStyleVariants } from 'types';

export interface MKButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  design?: MKStyleVariants;
  shape?: MKShapeVariants;
  stretch?: boolean;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  icon?: MKChildIconProps;
}

export const MKButton: FC<MKButtonProps> = ({
  design = 'primary',
  shape = 'round',
  stretch = false,
  loading = false,
  disabled = false,
  children,
  onClick,
  icon,
  className = '',
}) => (
  <button
    className={classNames('mk-button', design, shape, { loading, stretch, disabled: disabled || loading }, className)}
    onClick={(e) => {
      if (!disabled && !loading) {
        onClick?.(e);
      }
    }}
  >
    {icon?.position === 'start' && <span className="mk-button__start-icon">{icon.node}</span>}
    {children && <span className="mk-button__label">{children}</span>}
    {icon?.position === 'end' && <span className="mk-button__end-icon">{icon.node}</span>}
  </button>
);
