import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKShapeVariants, MKSizeTypes, MKStyleVariants } from 'types';

export interface MKTagProps {
  link?: string;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  shape?: MKShapeVariants;
  design?: MKStyleVariants;
  size?: MKSizeTypes;
  dataTestId?: string;
  className?: string;
  disabled?: boolean;
  borderless?: boolean;
  blank?: boolean;
  stateless?: boolean;
  onClick?: () => void;
}

export const MKTag: FC<MKTagProps> = ({
  dataTestId = 'mk-tag',
  disabled = false,
  className = '',
  borderless = false,
  blank = false,
  children,
  startIcon,
  endIcon,
  size = 'sm',
  design = 'primary',
  shape = 'round',
  onClick,
  ...props
}) => (
  <span
    {...props}
    data-testid={dataTestId}
    tabIndex={!!onClick ? 0 : -1}
    role="tab"
    className={classNames([
      'mk-tag',
      { stateless: !onClick, borderless, disabled, blank },
      className,
      size,
      shape,
      design,
    ])}
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
