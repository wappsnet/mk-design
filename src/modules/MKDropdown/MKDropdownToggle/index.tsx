import { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { MKStyleVariants } from 'types';
import { MKDropdownContext } from 'definitions';
import MKPopover from 'core/MKPopover';
import './style.scss';

export interface MKDropdownToggleProps {
  children?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  title?: ReactNode;
  toggleIcon?: ReactNode;
  variant?: MKStyleVariants;
  disabled?: boolean;
}

const MKDropdownToggle: FC<MKDropdownToggleProps> = ({ children, startIcon, endIcon, toggleIcon, title }) => {
  const { disabled, variant } = useContext(MKDropdownContext);
  return (
    <MKPopover.Toggle>
      {({ status, onToggle }) => (
        <button
          className={classNames('mk-dropdown-toggle', variant, {
            collapsed: status,
            disabled,
          })}
          disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (status) {
              onToggle?.(null);
            } else {
              onToggle?.(e.currentTarget);
            }
          }}
          onClick={(e) => {
            if (status) {
              onToggle?.(null);
            } else {
              onToggle?.(e.currentTarget);
            }
          }}
        >
          {children || (
            <>
              {startIcon && <span className="mk-dropdown-toggle__icon">{startIcon}</span>}
              {title && <span className="mk-dropdown-toggle__text">{title}</span>}
              {endIcon && <span className="mk-dropdown-toggle__icon">{endIcon}</span>}
            </>
          )}

          <span className="mk-dropdown-toggle__arrow">{toggleIcon || (status ? '▲' : '▼')}</span>
        </button>
      )}
    </MKPopover.Toggle>
  );
};

export default MKDropdownToggle;
