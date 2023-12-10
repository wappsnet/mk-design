import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

export interface MKLayoutSidebarProps {
  children?: ReactNode;
  stick?: 'left' | 'right';
}

export const MKLayoutSidebar: FC<MKLayoutSidebarProps> = ({ children, stick = 'left' }) => {
  const { design, expanded, sidebar, brand } = useContext(MKLayoutContext);

  return (
    <div className={classNames('mk-layout-sidebar', stick, design, { expanded })}>
      <div className="mk-layout-sidebar__header">
        {brand && <div className="mk-layout-sidebar__brand">{brand}</div>}
      </div>
      <div className="mk-layout-sidebar__content">{children || sidebar}</div>
    </div>
  );
};
