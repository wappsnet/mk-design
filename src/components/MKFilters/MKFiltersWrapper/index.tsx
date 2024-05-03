import { FC, useMemo } from 'react';

import { generateDateFilter } from '../MKFiltersDate';
import { generateGroupsFilter } from '../MKFiltersGroups';
import { generateOptionsFilter } from '../MKFiltersOptions';
import { generateSearchFilter } from '../MKFiltersSearch';

type MKOptionsFilterProps = ReturnType<typeof generateOptionsFilter>;
type MKGroupsFilterProps = ReturnType<typeof generateGroupsFilter>;
type MKSearchFilterProps = ReturnType<typeof generateSearchFilter>;
type MKDateFilterProps = ReturnType<typeof generateDateFilter>;

type MKFilterItemType = MKOptionsFilterProps | MKGroupsFilterProps | MKSearchFilterProps | MKDateFilterProps;

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
      Object.values(filters).map((filter) => {
        switch (filter.type) {
          case 'options':
            return filter.render({
              type: 'options',
              label: filter.label,
              placeholder: filter.placeholder,
              value: filter.value,
              options: filter.options,
              setValue: (value) => {
                console.log(value);
              },
            });
          case 'groups':
            return filter.render({
              type: 'groups',
              label: filter.label,
              placeholder: filter.placeholder,
              value: filter.value,
              groups: filter.groups,
              setValue: (value) => {
                console.log(value);
              },
            });
          case 'search':
            return filter.render({
              type: 'search',
              placeholder: filter.placeholder,
              value: filter.value,
              setValue: (value) => {
                console.log(value);
              },
            });
          case 'date':
            return filter.render({
              type: 'date',
              placeholder: filter.placeholder,
              value: filter.value,
              setValue: (value) => {
                console.log(value);
              },
            });
          default:
            return null;
        }
      }),
    [filters],
  );

  console.log(items, values);

  return null;
};
