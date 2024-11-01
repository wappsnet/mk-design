import { FC, ReactNode, useContext, useMemo } from 'react';

import { clsx } from 'clsx';

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
  className?: string;
}

export const MKLayoutHeader: FC<MKLayoutHeaderProps> = ({ children, className = '', brand }) => {
  const { sidebar, design, expanded, header, setExpanded } = useContext(MKLayoutContext);

  const navbar = useMemo(() => children || header, [children, header]);

  return (
    <MKLayoutHeaderStyled className={clsx('mk-layout-header', className)} mkDesign={design}>
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
