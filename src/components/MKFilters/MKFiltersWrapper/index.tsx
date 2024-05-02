import { FC, useMemo } from 'react';

import { generateSelectFilter } from '../MKFiltersSelect';

type MKSelectFilterProps = ReturnType<typeof generateSelectFilter>;

type MKFilterItemType = MKSelectFilterProps;

export interface MKFiltersWrapperProps {
  filters: Record<string, MKFilterItemType>;
}

export const MKFiltersWrapper: FC<MKFiltersWrapperProps> = ({ filters }) => {
  const values = useMemo(
    () =>
      Object.entries(filters).reduce(
        (acc, [key, filter]) => ({
          ...acc,
          [key]: filter.value,
        }),
        {},
      ),
    [filters],
  );

  const items = useMemo(
    () =>
      Object.entries(filters).map(([key, { component: Component, ...props }]) => <Component key={key} {...props} />),
    [filters],
  );

  console.log(items, values);

  return null;
};
