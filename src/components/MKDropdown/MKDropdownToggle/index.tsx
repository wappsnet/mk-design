import { ComponentProps, ElementType, ReactNode, useContext, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKDropdownContext } from 'context';
import { MKDesignTypes } from 'types';

import { MKPopover } from 'core/MKPopover';

import {
  MKDropdownToggleArrowStyled,
  MKDropdownToggleIconStyled,
  MKDropdownToggleStyled,
  MKDropdownToggleTextStyled,
} from './style';

export type MKDropdownToggleProps<T extends ElementType> = {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  title?: ReactNode;
  toggleIcon?: ReactNode;
  design?: MKDesignTypes;
  disabled?: boolean;
  className?: string;
  as?: T;
} & ComponentProps<T>;

export const MKDropdownToggle = <T extends ElementType = 'button'>({
  children,
  startIcon,
  endIcon,
  toggleIcon,
  title,
  className = '',
  as,
  ...props
}: MKDropdownToggleProps<T>) => {
  const context = useContext(MKDropdownContext);
  const design = useMemo(() => props.design ?? context.design, [context.design, props.design]);
  const disabled = useMemo(() => props.disabled ?? context.disabled, [context.disabled, props.disabled]);

  return (
    <MKPopover.Toggle>
      {({ status, onToggle }) => (
        <MKDropdownToggleStyled
          {...props}
          as={as}
          mkModified={!!as}
          mkDisabled={disabled}
          mkDesign={design}
          className={clsx('mk-dropdown-toggle', className)}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={(e) => {
            e.stopPropagation();

            if (status) {
              onToggle?.(null);
            } else {
              onToggle?.(e.currentTarget);
            }
          }}
          disabled={disabled}
        >
          {children || (
            <>
              {startIcon && (
                <MKDropdownToggleIconStyled className="mk-dropdown-toggle__icon">
                  {startIcon}
                </MKDropdownToggleIconStyled>
              )}
              {title && (
                <MKDropdownToggleTextStyled className="mk-dropdown-toggle__text">{title}</MKDropdownToggleTextStyled>
              )}
              {endIcon && (
                <MKDropdownToggleIconStyled className="mk-dropdown-toggle__icon">{endIcon}</MKDropdownToggleIconStyled>
              )}
              {toggleIcon && (
                <MKDropdownToggleArrowStyled className="mk-dropdown-toggle__arrow">
                  {toggleIcon}
                </MKDropdownToggleArrowStyled>
              )}
            </>
          )}
        </MKDropdownToggleStyled>
      )}
    </MKPopover.Toggle>
  );
};
