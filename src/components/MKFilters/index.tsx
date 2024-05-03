import { generateDateFilter, MKFiltersDate } from './MKFiltersDate';
import { generateGroupsFilter, MKFiltersGroups } from './MKFiltersGroups';
import { generateOptionsFilter, MKFiltersOptions } from './MKFiltersOptions';
import { generateSearchFilter, MKFiltersSearch } from './MKFiltersSearch';
import { MKFiltersWrapper } from './MKFiltersWrapper';

export const MKFilters = Object.assign(MKFiltersWrapper, {
  Options: MKFiltersOptions,
  Groups: MKFiltersGroups,
  Search: MKFiltersSearch,
  Date: MKFiltersDate,
  generators: {
    select: generateOptionsFilter,
    search: generateSearchFilter,
    date: generateDateFilter,
    group: generateGroupsFilter,
  },
});
