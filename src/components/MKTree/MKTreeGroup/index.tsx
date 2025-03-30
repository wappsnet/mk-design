import { ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKTreeLeaf } from '../MKTreeLeaf';

import { MKTreeGroupChildrenStyled, MKTreeGroupStyled } from './style';

interface MKTreeLeafRenderProps<D> {
  data: D;
  expanded: boolean;
  expandable: boolean;
  expand?: (path: string) => void;
}

export interface MKTreeGroupProps<D> {
  path: string;
  label?: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
  className?: string;
  expanded?: boolean;
  inlined?: boolean;
  outlined?: boolean;
  expandIcon?: ReactNode;
  onExpand?: (path: string) => void;
  data: D;
  render?: (props: MKTreeLeafRenderProps<D>) => ReactNode;
  showToggleIcon?: boolean;
}

export const MKTreeGroup = <D = unknown,>({
  path,
  className = '',
  prefix,
  children,
  label,
  expanded = true,
  inlined = false,
  outlined = false,
  showToggleIcon = false,
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
      inlined={inlined}
      outlined={outlined}
      expandable={!!children}
      onExpand={onExpand}
      expanded={expanded}
      expandIcon={expandIcon}
      showToggleIcon={showToggleIcon}
    >
      {render?.({
        data,
        expandable: !!children,
        expanded,
        expand: onExpand,
      })}
    </MKTreeLeaf>
    {!!children && expanded && (
      <MKTreeGroupChildrenStyled className={clsx('mk-tree-group__children')} mkExpanded={expanded}>
        {children}
      </MKTreeGroupChildrenStyled>
    )}
  </MKTreeGroupStyled>
);
