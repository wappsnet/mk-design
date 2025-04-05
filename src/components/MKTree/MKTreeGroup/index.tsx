import { ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKDesignTypes } from 'types';

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
  design?: MKDesignTypes;
  className?: string;
  expanded?: boolean;
  outlined?: boolean;
  root?: boolean;
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
  design = 'primary',
  root = false,
  expanded = true,
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
      outlined={outlined && !root}
      expandable={!!children}
      onExpand={onExpand}
      expanded={expanded}
      expandIcon={expandIcon}
      showToggleIcon={showToggleIcon}
      design={design}
    >
      {render?.({
        data,
        expandable: !!children,
        expanded,
        expand: onExpand,
      })}
    </MKTreeLeaf>
    {!!children && expanded && (
      <MKTreeGroupChildrenStyled
        className={clsx('mk-tree-group__children')}
        mkExpanded={expanded}
        mkOutlined={outlined}
        mkDesign={design}
      >
        {children}
      </MKTreeGroupChildrenStyled>
    )}
  </MKTreeGroupStyled>
);
