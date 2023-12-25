import './style.scss';

import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

import { MKIcon } from 'core/MKIcon';

export interface MKLayoutHeaderProps {
  children?: ReactNode;
}

export const MKLayoutHeader: FC<MKLayoutHeaderProps> = ({ children }) => {
  const { design, expanded, sidebar, setExpanded, header, brand } = useContext(MKLayoutContext);

  const brander = useMemo(() => {
    if (sidebar) {
      if (!expanded) {
        return brand;
      }

      return null;
    }

    return brand;
  }, [sidebar, expanded, brand]);

  const navbar = useMemo(() => children || header, [children, header])

  return (
    <div className={classNames('mk-layout-header', design, { expanded })}>
      {sidebar && (
        <button
          className="mk-layout-header__toggle"
          onClick={() => {
            setExpanded?.(!expanded);
          }}
        >
          {expanded ? <MKIcon name="xmark" /> : <MKIcon name="bars" />}
        </button>
      )}
      {brander && <div className="mk-layout-header__brand">{brander}</div>}
      {navbar && <div className="mk-layout-header__nav">{navbar}</div>}
    </div>
  );
};
