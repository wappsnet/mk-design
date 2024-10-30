import { FC, ReactNode, useCallback, useContext } from 'react';

import { clsx } from 'clsx';

import { MKLayoutContext } from 'context';

import { MKIcon } from 'core/MKIcon';

import { MKLayoutToggleStyled } from './style';

export interface MKLayoutToggleProps {
  children?: ReactNode;
  onExpand?: (expanded: boolean) => void;
}

export const MKLayoutToggle: FC<MKLayoutToggleProps> = ({ children, onExpand }) => {
  const { design, setExpanded, expanded } = useContext(MKLayoutContext);

  const handleExpand = useCallback(() => {
    setExpanded?.(!expanded);
    onExpand?.(!expanded);
  }, [expanded, onExpand, setExpanded]);

  return (
    <MKLayoutToggleStyled
      className={clsx('mk-layout-toggle', design, { expanded })}
      onClick={() => {
        handleExpand();
      }}
      mkDesign={design}
    >
      {children || expanded ? <MKIcon icon="xmark" /> : <MKIcon icon="bars" />}
    </MKLayoutToggleStyled>
  );
};
