import { ReactNode, Ref, ComponentProps, ElementType, MouseEvent, ComponentType, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKLinkStyled } from './style';

interface MKLinkAsProps {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  rel?: 'noreferrer' | 'alternate';
  isActive?: () => boolean;
  exact?: boolean;
  to?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export type MKLinkProps<T extends ElementType> = {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  ref?: Ref<HTMLAnchorElement>;
  as?: T | ComponentType<MKLinkAsProps>;
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
  const Component = useMemo(() => as ?? 'a', [as]);

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
