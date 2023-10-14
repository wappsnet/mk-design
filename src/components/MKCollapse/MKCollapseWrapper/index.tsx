import { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';

import { MKCollapseContext } from 'definitions';
import './style.scss';

export interface MKCollapseWrapperProps<T = any> {
  data?: T[];
  expandable?: boolean;
  renderItem?: (data: T, index: number) => ReactNode;
  children?: ReactNode;
  defaultCollapsed?: string[];
  onCollapse?: (key: string) => void;
  bordered?: boolean;
}

export const MKCollapseWrapper: FC<MKCollapseWrapperProps> = ({
  children,
  expandable = false,
  bordered = false,
  data = [],
  defaultCollapsed = [],
  onCollapse,
  renderItem,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <MKCollapseContext.Provider
      value={{
        collapsed,
        collapse: (key) => {
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
      }}
    >
      <div className={classNames(['mk-collapse', { bordered }])}>
        {children}
        {renderItem && data?.map((item, index) => renderItem(item, index))}
      </div>
    </MKCollapseContext.Provider>
  );
};
