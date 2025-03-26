import { FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKIcon } from 'core/MKIcon';

import { MKTreeLeafNodeStyled, MKTreeLeafStyled, MKTreeLeafToggleStyled } from './style';

export interface MKTreeLeafProps {
  path: string;
  label?: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
  className?: string;
  inlined?: boolean;
  expandIcon?: ReactNode;
  onExpand?: (path: string) => void;
  expanded?: boolean;
  expandable?: boolean;
}

export const MKTreeLeaf: FC<MKTreeLeafProps> = ({
  path,
  className = '',
  prefix,
  children,
  label,
  onExpand,
  expandIcon,
  expanded = false,
  inlined = false,
  expandable = false,
  ...props
}) => {
  const toggle = useMemo(() => {
    if (expandable) {
      if (expandIcon) {
        return expandIcon;
      }

      if (expanded) {
        return <MKIcon icon="minus" />;
      }

      return <MKIcon icon="plus" />;
    }
  }, [expandIcon, expanded, expandable]);

  return (
    <MKTreeLeafStyled className={clsx('mk-tree-leaf', className)} mkInlined={inlined} {...props}>
      {expandable && (
        <MKTreeLeafToggleStyled className="mk-tree-leaf__toggle" onClick={() => onExpand?.(path)}>
          {toggle}
        </MKTreeLeafToggleStyled>
      )}
      {prefix && <div className="mk-tree-leaf__prefix">{prefix}</div>}
      {label && <div className="mk-tree-leaf__label">{label}</div>}
      {children && <MKTreeLeafNodeStyled className="mk-tree-leaf__node">{children}</MKTreeLeafNodeStyled>}
    </MKTreeLeafStyled>
  );
};
