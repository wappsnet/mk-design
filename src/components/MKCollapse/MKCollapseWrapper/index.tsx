import { FC, ReactNode, useCallback, useState } from 'react';

import { clsx } from 'clsx';

import { MKCollapseContext } from 'context';

import { MKCollapseStyled } from './style';

export interface MKCollapseWrapperProps<T = unknown> {
  data?: T[];
  expandable?: boolean;
  renderItem?: (data: T, index: number) => ReactNode;
  children?: ReactNode;
  defaultCollapsed?: string[];
  onCollapse?: (key: string) => void;
  bordered?: boolean;
  className?: string;
}

export const MKCollapseWrapper: FC<MKCollapseWrapperProps> = ({
  children,
  expandable = false,
  bordered = false,
  data = [],
  defaultCollapsed = [],
  className = '',
  onCollapse,
  renderItem,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const handleCollapse = useCallback(
    (key: string) => {
      setCollapsed((prev) => {
        if (prev.includes(key)) {
          if (expandable) {
            return prev.filter((k) => k !== key);
          } else {
            return [];
          }
        }

        if (expandable) {
          return [...prev, key];
        } else {
          return [key];
        }
      });

      onCollapse?.(key);
    },
    [onCollapse, expandable],
  );

  return (
    <MKCollapseContext.Provider
      value={{
        bordered,
        collapsed,
        collapse: handleCollapse,
      }}
    >
      <MKCollapseStyled className={clsx(['mk-collapse', className])} mkBordered={bordered} role="tablist">
        {children}
        {renderItem && data?.map((item, index) => renderItem(item, index))}
      </MKCollapseStyled>
    </MKCollapseContext.Provider>
  );
};
