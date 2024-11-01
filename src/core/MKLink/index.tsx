import { ReactNode, Ref, ComponentProps, ElementType } from 'react';

import { clsx } from 'clsx';

import { MKLinkStyled } from './style';

export type MKLinkProps<T extends ElementType> = {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLAnchorElement>;
  as?: T;
} & ComponentProps<T>;

export const MKLink = <T extends ElementType = 'a'>({
  children,
  className = '',
  as,
  ref,
  disabled = false,
  active = false,
  onClick,
  ...props
}: MKLinkProps<T>) => {
  const Component = as || 'a';

  return (
    <MKLinkStyled
      {...props}
      as={Component}
      ref={ref}
      className={clsx('mk-link', className)}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        }
        onClick?.(e);
      }}
      mkDisabled={disabled}
      mkActive={active}
    >
      {children}
    </MKLinkStyled>
  );
};
