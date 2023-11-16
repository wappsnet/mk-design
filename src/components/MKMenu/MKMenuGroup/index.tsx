import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

type MKMenuGroupProps = {
  children: ReactNode;
  label?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export const MKMenuGroup: FC<MKMenuGroupProps> = ({ children, className = '', label, icon }) => (
  <div className={classNames('mk-menu-group', className)}>
    {!!label && (
      <div className="mk-menu-group__header">
        {!!icon && <span className="mk-menu-group__header-icon">{icon}</span>}
        <span className="mk-menu-group__header-label">{label}</span>
      </div>
    )}
    <div className="mk-menu-group__wrapper">{children}</div>
  </div>
);
