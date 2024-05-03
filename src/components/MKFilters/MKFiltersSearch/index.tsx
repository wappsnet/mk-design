import { FC } from 'react';

export interface MKFiltersSearchProps {
  type: 'search';
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

export const MKFiltersSearch: FC<MKFiltersSearchProps> = ({ value, placeholder, setValue }) => {
  console.log(value, placeholder, setValue);
  return null;
};

export const generateSearchFilter = (props: MKFiltersSearchProps) => ({
  ...props,
  render: (props: MKFiltersSearchProps) => <MKFiltersSearch {...props} />,
});
