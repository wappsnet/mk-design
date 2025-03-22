import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKTreeLeaf } from '../MKTreeLeaf';

import { MKTreeGroupChildrenStyled, MKTreeGroupStyled } from './style';

export interface MKTreeGroupProps {
  path: string;
  label: ReactNode;
  prefix?: ReactNode;
  children?: ReactNode;
  className?: string;
  expanded?: boolean;
  inlined?: boolean;
  expandIcon?: ReactNode;
  onExpand?: (path: string) => void;
}

export const MKTreeGroup: FC<MKTreeGroupProps> = ({
  path,
  className = '',
  prefix,
  children,
  label,
  expanded = true,
  inlined = false,
  expandIcon,
  onExpand,
  ...props
}) => (
  <MKTreeGroupStyled className={clsx('mk-tree-group', className)} {...props}>
    <MKTreeLeaf
      path={path}
      label={label}
      prefix={prefix}
      expandable={!!children}
      onExpand={onExpand}
      expanded={expanded}
      expandIcon={expandIcon}
    />
    {!!children && (
      <MKTreeGroupChildrenStyled className={clsx('mk-tree-group__children')} mkExpanded={expanded} mkInlined={inlined}>
        {children}
      </MKTreeGroupChildrenStyled>
    )}
  </MKTreeGroupStyled>
);
