import { ReactNode, ComponentType, Ref, AnchorHTMLAttributes, ComponentProps } from 'react';

import classNames from 'classnames';

import { MKLinkStyled } from './style';

export interface MKLinkAsComponentProps {
  to?: string;
  className?: string;
  children?: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
  exact?: boolean;
  isActive?: boolean;
  eventKey?: string;
}

export interface MKLinkProps<T extends MKLinkAsComponentProps> extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  instance?: Ref<HTMLAnchorElement>;
  as?: ComponentType<T>;
  meta?: ComponentProps<ComponentType<T>>;
}

export const MKLink = <T = 'a',>({
  children,
  className = '',
  href = '',
  as,
  instance,
  disabled = false,
  active = false,
  meta = {},
  onClick,
  ...props
}: MKLinkProps<T>) => {
  if (as) {
    return (
      <MKLinkStyled
        {...props}
        {...meta}
        as={as}
        className={classNames('mk-link', className)}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
          onClick?.(e);
        }}
        ref={instance}
        disabled={disabled}
        active={active}
      >
        {children}
      </MKLinkStyled>
    );
  }

  return (
    <MKLinkStyled
      {...props}
      href={href}
      ref={instance}
      className={classNames('mk-link', className)}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
        onClick?.(e);
      }}
      disabled={disabled}
      active={active}
    >
      {children}
    </MKLinkStyled>
  );
};
