import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

import { MKIcon } from 'core/MKIcon';
import { MKSwiper } from 'core/MKSwiper';

export interface MKLayoutSidebarProps {
  children?: ReactNode;
  stick?: 'left' | 'right';
  brand?: ReactNode;
}

export const MKLayoutSidebar: FC<MKLayoutSidebarProps> = ({ children, brand, stick = 'left' }) => {
  const { design, expanded, setExpanded, sidebar } = useContext(MKLayoutContext);

  return (
    <MKSwiper
      direction="x"
      onSwipe={({ x }) => {
        if (x > 100) {
          setExpanded?.(stick === 'left');
        } else if (x < -100) {
          setExpanded?.(stick === 'right');
        }
      }}
    >
      <div className={classNames('mk-layout-sidebar', stick, design, { expanded })}>
        <div className="mk-layout-sidebar__header">
          {brand && <div className="mk-layout-sidebar__brand">{brand}</div>}
          <button
            className="mk-layout-sidebar__toggle"
            onClick={() => {
              setExpanded?.(!expanded);
            }}
          >
            {expanded ? <MKIcon icon="angle-left" /> : <MKIcon icon="angle-right" />}
          </button>
        </div>
        <div className="mk-layout-sidebar__content">{children || sidebar}</div>
      </div>
    </MKSwiper>
  );
};
