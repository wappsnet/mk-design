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

  const branded = useMemo(() => {
    if (sidebar) {
      return !expanded;
    }

    return true;
  }, [sidebar, expanded]);

  return (
    <div className={classNames('mk-layout-header', design, { expanded })}>
      {sidebar && (
        <button
          className="mk-layout-header__toggle"
          onClick={() => {
            setExpanded?.(!expanded);
          }}
        >
          {expanded ? <MKIcon name="address-book" /> : <MKIcon name="address-book" />}
        </button>
      )}
      {branded && brand && <div className="mk-layout-header__barnd">{brand}</div>}
      <div className="mk-layout-header__nav">{children || header}</div>
    </div>
  );
};
