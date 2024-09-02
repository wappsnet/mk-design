import { FC, ReactNode, useCallback, useContext } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';

import { MKIcon } from 'core/MKIcon';

import { MKLayoutToggleStyled } from './style';

export interface MKLayoutToggleProps {
  children?: ReactNode;
  onExpand?: (expanded: boolean) => void;
}

export const MKLayoutToggle: FC<MKLayoutToggleProps> = ({ children, onExpand }) => {
  const { theme, setExpanded, expanded } = useContext(MKLayoutContext);

  const handleExpand = useCallback(() => {
    setExpanded?.(!expanded);
    onExpand?.(!expanded);
  }, [expanded, onExpand, setExpanded]);

  return (
    <MKLayoutToggleStyled
      className={classNames('mk-layout-toggle', theme, { expanded })}
      onClick={() => {
        handleExpand();
      }}
      theme={theme}
    >
      {children || expanded ? <MKIcon icon="xmark" /> : <MKIcon icon="bars" />}
    </MKLayoutToggleStyled>
  );
};
