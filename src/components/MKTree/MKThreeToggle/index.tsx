import { FC, ReactNode, useMemo } from 'react';

import { MKIcon } from 'core/MKIcon';

import { MKTreeLeafToggleStyled } from './style';

export interface MKTreeToggleProps {
  path: string;
  expandIcon?: ReactNode;
  onExpand?: (path: string) => void;
  expanded?: boolean;
}

export const MKTreeToggle: FC<MKTreeToggleProps> = ({ path, onExpand, expandIcon, expanded = false, ...props }) => {
  const toggleIcon = useMemo(() => {
    if (expandIcon) {
      return expandIcon;
    }

    if (expanded) {
      return <MKIcon icon="minus" />;
    }

    return <MKIcon icon="plus" />;
  }, [expandIcon, expanded]);

  return (
    <MKTreeLeafToggleStyled {...props} className="mk-tree-leaf__toggle" onClick={() => onExpand?.(path)}>
      {toggleIcon}
    </MKTreeLeafToggleStyled>
  );
};
