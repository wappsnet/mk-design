import { FC, ReactNode, useContext, useLayoutEffect, useMemo } from 'react';

import { MKChildIconProps } from 'types';
import { MKTabsContext } from 'definitions';

type MKTabsWrapperProps = {
  children?: ReactNode;
  icon?: MKChildIconProps;
  label: ReactNode;
  name: string;
};

export const MKTabsItem: FC<MKTabsWrapperProps> = ({ children, name, icon, label }) => {
  const { addItem, items } = useContext(MKTabsContext);

  const exist = useMemo(() => !!items[name], [items, name]);

  useLayoutEffect(() => {
    if (!exist) {
      addItem?.({
        children,
        icon,
        name,
        label,
      });
    }
  }, [addItem, exist, children, icon, label, name]);

  return null;
};
