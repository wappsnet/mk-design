import { generateSelectFilter, MKFiltersSelect } from './MKFiltersSelect';
import { MKFiltersWrapper } from './MKFiltersWrapper';

export const MKFilters = Object.assign(MKFiltersWrapper, {
  Select: MKFiltersSelect,
  generators: {
    select: generateSelectFilter,
  },
});
