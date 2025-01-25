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
  disabled,
  design,
  ...props
}: MKDropdownToggleProps<T>) => {
  const context = useContext(MKDropdownContext);
  const mkDesign = useMemo(() => design ?? context.design, [context.design, design]);
  const mkDisabled = useMemo(() => disabled ?? context.disabled, [context.disabled, disabled]);

  return (
    <MKPopover.Toggle>
      {({ status, onToggle }) => (
        <MKDropdownToggleStyled
          as={as}
          mkModified={!!as}
          mkDisabled={mkDisabled}
          mkDesign={mkDesign}
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
          disabled={mkDisabled}
          {...props}
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
