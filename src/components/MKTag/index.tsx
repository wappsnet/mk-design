import { ComponentProps, ComponentType, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes, MKSizeTypes, MKDesignVariants } from 'types';

import { MKTagContentStyled, MKTagStyled } from './style';

export interface MKTagProps<T> {
  link?: string;
  as?: ComponentType<T>;
  meta?: ComponentProps<ComponentType<T>>;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  shape?: MKShapeTypes;
  design?: MKDesignVariants;
  size?: MKSizeTypes;
  dataTestId?: string;
  className?: string;
  disabled?: boolean;
  borderless?: boolean;
  blank?: boolean;
  stateless?: boolean;
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
  design = 'primary',
  shape = 'round',
  onClick,
  meta = {},
  ...props
}: MKTagProps<T>) => {
  const stateless = useMemo(() => !onClick, [onClick]);

  return (
    <MKTagStyled
      {...props}
      {...meta}
      as={as}
      data-testid={dataTestId}
      tabIndex={onClick ? 0 : -1}
      role="tab"
      className={clsx([
        'mk-tag',
        {
          borderless,
          disabled,
          blank,
          stateless,
        },
        className,
        size,
        shape,
        design,
      ])}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return false;
        }
        onClick?.(e);
      }}
      design={design}
      size={size}
      shape={shape}
      disabled={disabled}
      stateless={stateless}
      borderless={borderless}
    >
      {startIcon && <span className="mk-tag__icon">{startIcon}</span>}
      {children && <MKTagContentStyled className="mk-tag__content">{children}</MKTagContentStyled>}
      {endIcon && <span className="mk-tag__icon">{endIcon}</span>}
    </MKTagStyled>
  );
};
