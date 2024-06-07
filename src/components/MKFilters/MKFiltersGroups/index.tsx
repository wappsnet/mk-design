import { ReactNode } from 'react';

import { MKFiltersEnum } from 'types';

export interface MKFiltersOptionProps<V> {
  label: ReactNode;
  value: V;
}

export interface MKFiltersGroupProps<V> {
  label: ReactNode;
  id: string;
  options: MKFiltersOptionProps<V>;
}

export interface MKFiltersGroupsProps<V> {
  type: MKFiltersEnum.Groups;
  label?: ReactNode;
  placeholder?: string;
  value: V[];
  groups: MKFiltersGroupProps<V>[];
  setValue: (value: V[]) => void;
}

export const MKFiltersGroups = <V = unknown,>({ value, groups, setValue }: MKFiltersGroupsProps<V>) => {
  console.log(value, groups, setValue);
  return null;
};

export const generateGroupsFilter = <V = unknown,>(props: MKFiltersGroupsProps<V>) => ({
  ...props,
  type: MKFiltersEnum.Groups,
  render: (props: MKFiltersGroupsProps<V>) => <MKFiltersGroups {...props} />,
});
