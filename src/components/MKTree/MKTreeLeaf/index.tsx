import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKTreeToggle } from '../MKThreeToggle';

import { MKTreeLeafNodeStyled, MKTreeLeafStyled } from './style';

export interface MKTreeLeafProps {
  path: string;
  label?: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
  className?: string;
  inlined?: boolean;
  outlined?: boolean;
  expandIcon?: ReactNode;
  showToggleIcon?: boolean;
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
  outlined = false,
  expandable = false,
  showToggleIcon = false,
  ...props
}) => (
  <MKTreeLeafStyled className={clsx('mk-tree-leaf', className)} mkInlined={inlined} mkOutLined={outlined} {...props}>
    {expandable && showToggleIcon && (
      <MKTreeToggle onExpand={onExpand} path={path} expanded={expanded} expandIcon={expandIcon} />
    )}
    {prefix && <div className="mk-tree-leaf__prefix">{prefix}</div>}
    {label && <div className="mk-tree-leaf__label">{label}</div>}
    {children && <MKTreeLeafNodeStyled className="mk-tree-leaf__node">{children}</MKTreeLeafNodeStyled>}
  </MKTreeLeafStyled>
);
