import { ReactNode } from 'react';

export interface MKFiltersSelectOptionProps<V> {
  label: ReactNode;
  value: V;
}

export interface MKFiltersSelectProps<V> {
  label?: ReactNode;
  placeholder?: string;
  value: V[];
  options: MKFiltersSelectOptionProps<V>[];
  setValue: (value: V[]) => void;
}

export const MKFiltersSelect = <V,>({ value, options, setValue }: MKFiltersSelectProps<V>) => {
  console.log(value, options, setValue);
  return null;
};

export const generateSelectFilter = <V = unknown,>(props: MKFiltersSelectProps<V>) => ({
  ...props,
  component: MKFiltersSelect,
});
