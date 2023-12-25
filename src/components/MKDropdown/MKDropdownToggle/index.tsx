import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKDropdownContext } from 'definitions';
import { MKStyleVariants } from 'types';

import { MKPopover } from 'core/MKPopover';

export interface MKDropdownToggleProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  title?: ReactNode;
  toggleIcon?: ReactNode;
  design?: MKStyleVariants;
  disabled?: boolean;
}

export const MKDropdownToggle: FC<MKDropdownToggleProps> = ({ children, startIcon, endIcon, toggleIcon, title }) => {
  const { disabled, design } = useContext(MKDropdownContext);
  return (
    <MKPopover.Toggle>
      {({ status, onToggle }) => (
        <button
          className={classNames('mk-dropdown-toggle', design, {
            collapsed: status,
            disabled,
          })}
          disabled={disabled}
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
        >
          {children || (
            <span className="mk-dropdown-toggle__wrapper">
              {startIcon && <span className="mk-dropdown-toggle__icon">{startIcon}</span>}
              {title && <span className="mk-dropdown-toggle__text">{title}</span>}
              {endIcon && <span className="mk-dropdown-toggle__icon">{endIcon}</span>}
              {toggleIcon && <span className="mk-dropdown-toggle__arrow">{toggleIcon}</span>}
            </span>
          )}
        </button>
      )}
    </MKPopover.Toggle>
  );
};
