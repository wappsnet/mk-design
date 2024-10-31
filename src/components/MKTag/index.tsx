import { ComponentProps, ComponentType, HTMLAttributes, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes, MKSizeTypes, MKDesignTypes } from 'types';

import { MKTagContentStyled, MKTagStyled } from './style';

export interface MKTagProps<T> extends HTMLAttributes<HTMLSpanElement> {
  link?: string;
  as?: ComponentType<T>;
  meta?: Partial<ComponentProps<ComponentType<T>>>;
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  shape?: MKShapeTypes;
  design?: MKDesignTypes;
  size?: MKSizeTypes;
  className?: string;
  disabled?: boolean;
  borderless?: boolean;
  blank?: boolean;
  active?: boolean;
  stateless?: boolean;
}

export const MKTag = <T extends HTMLSpanElement = HTMLSpanElement>({
  disabled = false,
  as,
  className = '',
  borderless = false,
  blank = false,
  active = false,
  children,
  startIcon,
  endIcon,
  size = 'sm',
  design = 'primary',
  shape = 'base',
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
      mkDesign={design}
      mkSize={size}
      mkShape={shape}
      mkDisabled={disabled}
      mkStateless={stateless}
      mkBorderless={borderless}
      mkActive={active}
      mkBlank={blank}
    >
      {startIcon && <span className="mk-tag__icon">{startIcon}</span>}
      {children && <MKTagContentStyled className="mk-tag__content">{children}</MKTagContentStyled>}
      {endIcon && <span className="mk-tag__icon">{endIcon}</span>}
    </MKTagStyled>
  );
};
