import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKDropdownContext } from 'context';
import { MKThemeVariants } from 'types';

import { MKPopover } from 'core/MKPopover';

import {
  MKDropdownToggleArrowStyled,
  MKDropdownToggleIconStyled,
  MKDropdownToggleStyled,
  MKDropdownToggleTextStyled,
} from './style';

export interface MKDropdownToggleProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  title?: ReactNode;
  toggleIcon?: ReactNode;
  theme?: MKThemeVariants;
  disabled?: boolean;
}

export const MKDropdownToggle: FC<MKDropdownToggleProps> = ({ children, startIcon, endIcon, toggleIcon, title }) => {
  const { disabled, theme } = useContext(MKDropdownContext);
  return (
    <MKPopover.Toggle>
      {({ status, onToggle }) => (
        <MKDropdownToggleStyled
          className={clsx('mk-dropdown-toggle', theme, {
            collapsed: status,
            disabled,
          })}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            e.stopPropagation();

            if (status) {
              onToggle?.(null);
            } else {
              onToggle?.(e.currentTarget);
            }
          }}
          onMouseDown={(e) => {
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
