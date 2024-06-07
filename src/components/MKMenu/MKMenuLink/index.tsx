import './style.scss';

import { ReactNode, useMemo, ComponentType, Ref, MouseEvent, FC } from 'react';

import classNames from 'classnames';

interface MKMenuLinkAsComponentProps {
  to: string;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

export interface MKMenuLinkProps {
  active?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  instance?: Ref<HTMLAnchorElement>;
  to?: string;
  href?: string;
  exact?: boolean;
  isActive?: boolean;
  eventKey?: string;
  truncate?: boolean;
  as?: ComponentType<MKMenuLinkAsComponentProps>;
}

export const MKMenuLink: FC<MKMenuLinkProps> = ({
  disabled,
  to,
  onClick,
  children,
  className = '',
  startIcon,
  endIcon,
  href = '',
  as: Component,
  instance,
  ...props
}) => {
  const content = useMemo(
    () => (
      <>
        {startIcon && <span className="mk-menu-link__start-icon">{startIcon}</span>}
        {children && <span className="mk-menu-link__label">{children}</span>}
        {endIcon && <span className="mk-menu-link__end-icon">{endIcon}</span>}
      </>
    ),
    [startIcon, children, endIcon],
  );

  if (Component && to) {
    return (
      <Component
        className={classNames('mk-menu-link', className)}
        {...props}
        to={to}
        ref={instance}
        onClick={(e) => {
          if (!to || disabled) {
            e.preventDefault();
            onClick?.(e);
          }
        }}
      >
        {content}
      </Component>
    );
  }

  return (
    <a
      {...props}
      href={href || to}
      ref={instance}
      className={classNames('mk-menu-link', className)}
      onClick={(e) => {
        if (!href || !to || disabled) {
          e.preventDefault();
          onClick?.(e);
        }
      }}
    >
      {content}
    </a>
  );
};
