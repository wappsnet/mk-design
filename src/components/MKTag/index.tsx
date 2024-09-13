import './style.scss';

import { ComponentProps, ComponentType, ReactNode } from 'react';

import classNames from 'classnames';

import { MKShapeTypes, MKSizeTypes, MKThemeVariants } from 'types';

import { MKTagContentStyled, MKTagStyled } from './style';

export interface MKTagProps<T> {
  link?: string;
  as?: ComponentType<T>;
  meta?: ComponentProps<ComponentType<T>>;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  shape?: MKShapeTypes;
  theme?: MKThemeVariants;
  size?: MKSizeTypes;
  dataTestId?: string;
  className?: string;
  disabled?: boolean;
  borderless?: boolean;
  blank?: boolean;
  stateless?: boolean;
  onClick?: () => void;
}

export const MKTag = <T = 'span',>({
  dataTestId = 'mk-tag',
  disabled = false,
  as,
  className = '',
  borderless = false,
  blank = false,
  children,
  startIcon,
  endIcon,
  size = 'sm',
  theme = 'primary',
  shape = 'round',
  onClick,
  ...props
}: MKTagProps<T>) => (
  <MKTagStyled
    {...props}
    as={as}
    data-testid={dataTestId}
    tabIndex={onClick ? 0 : -1}
    role="tab"
    className={classNames([
      'mk-tag',
      { stateless: !onClick, borderless, disabled, blank },
      className,
      size,
      shape,
      theme,
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
    size={size}
    shape={shape}
  >
    {startIcon && <span className="mk-tag__icon">{startIcon}</span>}
    {children && <MKTagContentStyled className="mk-tag__content">{children}</MKTagContentStyled>}
    {endIcon && <span className="mk-tag__icon">{endIcon}</span>}
  </MKTagStyled>
);
