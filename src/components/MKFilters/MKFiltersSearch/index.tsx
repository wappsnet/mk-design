import { FC } from 'react';

import { MKFiltersEnum } from 'types';

export interface MKFiltersSearchProps {
  type: MKFiltersEnum.Search;
  placeholder?: string;
  value: string;
  setValue?: (value: string) => void;
}

export const MKFiltersSearch: FC<MKFiltersSearchProps> = ({ value, placeholder, setValue }) => {
  console.log(value, placeholder, setValue);
  return null;
};

export const generateSearchFilter = (props: MKFiltersSearchProps) => ({
  ...props,
  type: MKFiltersEnum.Search,
  render: (props: MKFiltersSearchProps) => <MKFiltersSearch {...props} />,
});
