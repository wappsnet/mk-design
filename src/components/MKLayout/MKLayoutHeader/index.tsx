import './style.scss';

import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKIcon } from 'core/MKIcon';

export interface MKLayoutHeaderProps {
  children?: ReactNode;
  brand?: ReactNode;
}

export const MKLayoutHeader: FC<MKLayoutHeaderProps> = ({ children, brand }) => {
  const { sidebar, design, expanded, header, setExpanded } = useContext(MKLayoutContext);

  const navbar = useMemo(() => children || header, [children, header]);

  return (
    <div className={classNames('mk-layout-header', design, { expanded })}>
      {!!sidebar && (
        <button
          className="mk-layout-header__toggle"
          onClick={() => {
            setExpanded?.(!expanded);
          }}
        >
          {expanded ? <MKIcon icon="xmark" /> : <MKIcon icon="bars" />}
        </button>
      )}
      {brand && <div className="mk-layout-header__brand">{brand}</div>}
      {navbar && <div className="mk-layout-header__nav">{navbar}</div>}
    </div>
  );
};
