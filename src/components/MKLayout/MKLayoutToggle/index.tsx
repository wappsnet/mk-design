import './style.scss';

import { FC, ReactNode, useCallback, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';

import { MKIcon } from 'core/MKIcon';

export interface MKLayoutToggleProps {
  children?: ReactNode;
  onExpand?: (expanded: boolean) => void;
}

export const MKLayoutToggle: FC<MKLayoutToggleProps> = ({ children, onExpand }) => {
  const { design, setExpanded, expanded } = useContext(MKLayoutContext);

  const handleExpand = useCallback(() => {
    setExpanded?.(!expanded);
    onExpand?.(!expanded);
  }, [expanded, setExpanded]);

  return (
    <button
      className={classNames('mk-layout-toggle', design, { expanded })}
      onClick={() => {
        handleExpand();
      }}
    >
      {children || expanded ? <MKIcon icon="xmark" /> : <MKIcon icon="bars" />}
    </button>
  );
};
