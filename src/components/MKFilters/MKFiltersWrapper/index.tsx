import { FC, useMemo } from 'react';

import { MKFiltersEnum } from 'types';

import { MKFiltersDate, MKFiltersDateProps } from '../MKFiltersDate';
import { MKFiltersGroups, MKFiltersGroupsProps } from '../MKFiltersGroups';
import { MKFiltersOptions, MKFiltersOptionsProps } from '../MKFiltersOptions';
import { MKFiltersSearch, MKFiltersSearchProps } from '../MKFiltersSearch';

interface MKFilterItemProps<V = unknown> {
  name: string;
  type: MKFiltersEnum;
  details: MKFiltersDateProps | MKFiltersGroupsProps<V> | MKFiltersOptionsProps<V> | MKFiltersSearchProps;
}

export interface MKFiltersWrapperProps {
  filters: Record<string, MKFilterItemProps>;
}

export const MKFiltersWrapper: FC<MKFiltersWrapperProps> = ({ filters }) => {
  const values = useMemo(
    () =>
      Object.entries(filters).reduce(
        (acc, [key, filter]) => ({
          ...acc,
          [key]: filter.details.value,
        }),
        {},
      ),
    [filters],
  );

  const items = useMemo(
    () =>
      Object.values(filters).map((filter) => {
        switch (filter.details.type) {
          case MKFiltersEnum.Options:
            return <MKFiltersOptions {...filter.details} />;
          case MKFiltersEnum.Groups:
            return <MKFiltersGroups {...filter.details} />;
          case MKFiltersEnum.Search:
            return <MKFiltersSearch {...filter.details} />;
          case MKFiltersEnum.Date:
            return <MKFiltersDate {...filter.details} />;
          default:
            return null;
        }
      }),
    [filters],
  );

  console.log(items, values);

  return null;
};
