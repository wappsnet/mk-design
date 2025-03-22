import { ReactNode, useCallback, useState } from 'react';

import { clsx } from 'clsx';

import { MKDesignTypes } from 'types';

import { MKTreeGroup } from '../MKTreeGroup';
import { MKTreeLeaf } from '../MKTreeLeaf';

import { MKTreeWrapperStyled } from './style';

export interface MKTreeDataItemProps<D> {
  path: string;
  label: ReactNode;
  prefix?: ReactNode;
  children?: MKTreeDataItemProps<D>[];
  data?: D;
}

export interface MKTreeItemProps<D> {
  tree: MKTreeDataItemProps<D>[];
  render?: (props: D) => ReactNode;
  children?: ReactNode;
  design?: MKDesignTypes;
  expandIcon?: ReactNode;
  defaultExpanded?: string[];
  showBaseLines?: boolean;
  showChildLines?: boolean;
  onExpand?: (path: string) => void;
}

export const MKTreeWrapper = <D = unknown,>({
  tree,
  children,
  render,
  expandIcon,
  showChildLines = false,
  showBaseLines = false,
  defaultExpanded = [],
  onExpand,
}: MKTreeItemProps<D>) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleExpand = useCallback(
    (path: string) => {
      setExpanded((prev) => {
        if (prev.includes(path)) {
          return prev.filter((item) => item !== path);
        }

        return [...prev, path];
      });
      onExpand?.(path);
    },
    [onExpand],
  );

  return (
    <MKTreeWrapperStyled className={clsx('mk-tree-wrapper')}>
      {tree.map((item) => {
        if (item.children?.length) {
          return (
            <MKTreeGroup
              inlined={showBaseLines}
              key={item.path}
              path={item.path}
              label={item.label}
              expanded={expanded?.includes(item.path)}
              onExpand={handleExpand}
              expandIcon={expandIcon}
            >
              <MKTreeWrapper
                showBaseLines={showBaseLines}
                showChildLines={showChildLines}
                key={item.path}
                tree={item.children}
                render={render}
                defaultExpanded={expanded}
                onExpand={handleExpand}
                expandIcon={expandIcon}
              />
            </MKTreeGroup>
          );
        }

        return (
          <MKTreeLeaf
            inlined={showChildLines}
            key={item.path}
            path={item.path}
            label={item.label}
            prefix={item.prefix}
            expanded={expanded?.includes(item.path)}
            onExpand={handleExpand}
            expandIcon={expandIcon}
            expandable={!!item.children?.length}
          >
            {!!item.data && render?.(item.data)}
          </MKTreeLeaf>
        );
      })}
      {children}
    </MKTreeWrapperStyled>
  );
};
