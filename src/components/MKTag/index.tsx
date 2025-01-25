import { ComponentProps, ComponentType, ElementType, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKShapeTypes, MKSizeTypes, MKDesignTypes } from 'types';

import { MKTagContentStyled, MKTagStyled } from './style';

export type MKTagProps<T extends ElementType> = {
  link?: string;
  as?: ComponentType<T>;
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
} & ComponentProps<T>;

export const MKTag = <T extends ElementType = 'span'>({
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
  ...props
}: MKTagProps<T>) => {
  const stateless = useMemo(() => !onClick, [onClick]);
  return (
    <MKTagStyled
      as={as}
      tabIndex={onClick ? 0 : -1}
      role="tab"
      className={clsx(['mk-tag', className])}
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
      {...props}
    >
      {startIcon && <span className="mk-tag__icon">{startIcon}</span>}
      {children && <MKTagContentStyled className="mk-tag__content">{children}</MKTagContentStyled>}
      {endIcon && <span className="mk-tag__icon">{endIcon}</span>}
    </MKTagStyled>
  );
};
