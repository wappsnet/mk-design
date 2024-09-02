import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKIcon } from 'core/MKIcon';

import {
  MKLayoutHeaderBrandStyled,
  MKLayoutHeaderNavStyled,
  MKLayoutHeaderStyled,
  MKLayoutHeaderToggleStyled,
} from './style';

export interface MKLayoutHeaderProps {
  children?: ReactNode;
  brand?: ReactNode;
}

export const MKLayoutHeader: FC<MKLayoutHeaderProps> = ({ children, brand }) => {
  const { sidebar, theme, expanded, header, setExpanded } = useContext(MKLayoutContext);

  const navbar = useMemo(() => children || header, [children, header]);

  return (
    <MKLayoutHeaderStyled className={classNames('mk-layout-header', theme, { expanded })}>
      {!!sidebar && (
        <MKLayoutHeaderToggleStyled
          className="mk-layout-header__toggle"
          onClick={() => {
            setExpanded?.(!expanded);
          }}
        >
          {expanded ? <MKIcon icon="xmark" /> : <MKIcon icon="bars" />}
        </MKLayoutHeaderToggleStyled>
      )}
      {brand && <MKLayoutHeaderBrandStyled className="mk-layout-header__brand">{brand}</MKLayoutHeaderBrandStyled>}
      {navbar && <MKLayoutHeaderNavStyled className="mk-layout-header__nav">{navbar}</MKLayoutHeaderNavStyled>}
    </MKLayoutHeaderStyled>
  );
};
