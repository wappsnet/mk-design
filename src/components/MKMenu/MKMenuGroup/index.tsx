import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

type MKMenuGroupProps = {
  children: ReactNode;
  label?: ReactNode;
  icon?: ReactNode;
  uppercase?: boolean;
  className?: string;
};

export const MKMenuGroup: FC<MKMenuGroupProps> = ({ children, uppercase = false, className = '', label, icon }) => (
  <div className={classNames('mk-menu-group', className)}>
    {!!label && (
      <div className={classNames('mk-menu-group__header', { uppercase })}>
        {!!icon && <span className="mk-menu-group__header-icon">{icon}</span>}
        <span className="mk-menu-group__header-label">{label}</span>
      </div>
    )}
    <div className="mk-menu-group__wrapper">{children}</div>
  </div>
);
