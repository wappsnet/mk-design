import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKShapeVariants, MKStyleVariants } from 'types';

export interface MKTagProps {
  link?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  shape?: MKShapeVariants;
  variant?: MKStyleVariants;
  dataTestId?: string;
  className?: string;
  disabled?: boolean;
  borderless?: boolean;
  stateless?: boolean;
  onClick?: () => void;
}

export const MKTag: FC<MKTagProps> = ({
  dataTestId = 'mk-tag',
  disabled = false,
  className = '',
  borderless = false,
  children,
  startIcon,
  endIcon,
  variant = 'primary',
  shape = 'round',
  onClick,
  ...props
}) => (
  <span
    {...props}
    data-testid={dataTestId}
    tabIndex={!!onClick ? 0 : -1}
    role="tab"
    className={classNames(['mk-tag', { stateless: !onClick }, { borderless }, { disabled }, className, shape, variant])}
    onClick={() => {
      if (!disabled) {
        onClick?.();
      }
    }}
    onKeyDown={() => {
      if (!disabled) {
        onClick?.();
      }
    }}
  >
    {startIcon && <span className="mk-tag__icon">{startIcon}</span>}
    {children && <span className="mk-tag__content">{children}</span>}
    {endIcon && <span className="mk-tag__icon">{endIcon}</span>}
  </span>
);
