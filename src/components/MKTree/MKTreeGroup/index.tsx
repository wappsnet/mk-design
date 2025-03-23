import { ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKTreeLeaf } from '../MKTreeLeaf';

import { MKTreeGroupChildrenStyled, MKTreeGroupStyled } from './style';

export interface MKTreeGroupProps<D> {
  path: string;
  label?: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
  className?: string;
  expanded?: boolean;
  inlined?: boolean;
  expandIcon?: ReactNode;
  onExpand?: (path: string) => void;
  data?: D;
  render?: (props: D) => ReactNode;
}

export const MKTreeGroup = <D = unknown,>({
  path,
  className = '',
  prefix,
  children,
  label,
  expanded = true,
  inlined = false,
  expandIcon,
  onExpand,
  render,
  data,
  ...props
}: MKTreeGroupProps<D>) => (
  <MKTreeGroupStyled className={clsx('mk-tree-group', className)} {...props}>
    <MKTreeLeaf
      path={path}
      label={label}
      prefix={prefix}
      expandable={!!children}
      onExpand={onExpand}
      expanded={expanded}
      expandIcon={expandIcon}
    >
      {!!data && render?.(data)}
    </MKTreeLeaf>
    {!!children && (
      <MKTreeGroupChildrenStyled className={clsx('mk-tree-group__children')} mkExpanded={expanded} mkInlined={inlined}>
        {children}
      </MKTreeGroupChildrenStyled>
    )}
  </MKTreeGroupStyled>
);
