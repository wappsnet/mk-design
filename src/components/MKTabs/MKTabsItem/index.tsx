import { ComponentType, FC, ReactNode, useContext, MouseEvent, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKTabsContext } from 'context';
import { MKChildIconProps } from 'types';

interface MKTabComponentProps {
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
  rel?: 'noreferrer' | 'alternate';
  isActive?: () => boolean;
  exact?: boolean;
  to?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface MKTabsWrapperProps {
  children?: ReactNode;
  icon?: MKChildIconProps;
  label: ReactNode;
  name: string;
  as?: ComponentType<MKTabComponentProps>;
  to?: string;
  disabled?: boolean;
  exact?: boolean;
  isActive?: () => boolean;
}

export const MKTabsItem: FC<MKTabsWrapperProps> = ({
  children,
  to,
  disabled,
  isActive,
  name,
  icon,
  label,
  exact,
  as: Component,
  ...props
}) => {
  const { setActive, active } = useContext(MKTabsContext);

  const isActiveItem = useMemo(() => isActive?.() ?? active === name, [active, name, isActive]);

  const content = useMemo(
    () => (
      <>
        {icon?.position === 'start' && <span className="start-icon">{icon.node}</span>}
        {label && <span className="mk-tab__title">{label}</span>}
        {icon?.position === 'end' && <span className="start-icon">{icon.node}</span>}
      </>
    ),
    [icon, children],
  );

  return (
    <li
      {...props}
      className={clsx('mk-tab', { active: isActiveItem, disabled })}
      onClick={() => !disabled && setActive?.(to ?? name)}
    >
      {Component ? (
        <Component
          className={clsx('mk-tab__link', { disabled })}
          disabled={disabled}
          exact={exact}
          to={to}
          isActive={isActive}
          rel={disabled ? 'noreferrer' : 'alternate'}
          onClick={(e) => {
            if (disabled || !to || to === '#') {
              e.preventDefault();
            }
          }}
        >
          {content}
        </Component>
      ) : (
        <a rel="noreferrer" className={clsx('mk-tab__link', { active: isActiveItem, disabled })}>
          {content}
        </a>
      )}
    </li>
  );
};
