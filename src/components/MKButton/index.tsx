import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import { MKChildIconProps, MKShapeVariants, MKStyleVariants } from 'types';

export interface MKButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: MKStyleVariants;
  shape?: MKShapeVariants;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  icon?: MKChildIconProps;
}

export const MKButton: FC<MKButtonProps> = ({
  variant = 'primary',
  shape = 'round',
  loading = false,
  disabled = false,
  children,
  onClick,
  icon,
  className = '',
}) => (
  <button
    className={classNames(['mk-button', variant, shape, { loading }, { disabled: disabled || loading }, className])}
    onClick={(e) => {
      if (!disabled && !loading) {
        onClick?.(e);
      }
    }}
  >
    {icon?.position === 'start' && <span className="mk-button__start-icon">{icon.node}</span>}
    {children}
    {icon?.position === 'end' && <span className="mk-button__end-icon">{icon.node}</span>}
  </button>
);
