import { ReactNode, ComponentType, Ref, FC, AnchorHTMLAttributes } from 'react';

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

export interface MKLinkProps<T> extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  instance?: Ref<HTMLAnchorElement>;
  as?: ComponentType<T>;
}

export const MKLink: FC<MKLinkProps<MKLinkAsComponentProps> & MKLinkAsComponentProps> = ({
  children,
  className = '',
  href = '',
  as: Component,
  instance,
  disabled = false,
  active = false,
  onClick,
  ...props
}) => {
  if (Component) {
    return (
      <MKLinkStyled
        {...props}
        as={Component}
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
