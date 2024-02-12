import './style.scss';

import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

export interface MKLayoutHeaderProps {
  children?: ReactNode;
  brand?: ReactNode;
}

export const MKLayoutHeader: FC<MKLayoutHeaderProps> = ({ children, brand }) => {
  const { design, expanded, header } = useContext(MKLayoutContext);

  const navbar = useMemo(() => children || header, [children, header]);

  return (
    <div className={classNames('mk-layout-header', design, { expanded })}>
      {brand && <div className="mk-layout-header__brand">{brand}</div>}
      {navbar && <div className="mk-layout-header__nav">{navbar}</div>}
    </div>
  );
};
