import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

export interface MKLayoutSidebarProps {
  children?: ReactNode;
  stick?: 'left' | 'right';
  footer?: ReactNode;
  header?: ReactNode;
}

export const MKLayoutSidebar: FC<MKLayoutSidebarProps> = ({ children, stick = 'left', footer, header }) => {
  const { design, expanded, sidebar, brand } = useContext(MKLayoutContext);

  return (
    <div className={classNames('mk-layout-sidebar', stick, design, { expanded })}>
      {brand && <div className="mk-layout-sidebar__brand">{brand}</div>}
      {header && <div className="mk-layout-sidebar__header">{header}</div>}
      <div className="mk-layout-sidebar__content">{children || sidebar}</div>
      {footer && <div className="mk-layout-sidebar__footer">{footer}</div>}
    </div>
  );
};
