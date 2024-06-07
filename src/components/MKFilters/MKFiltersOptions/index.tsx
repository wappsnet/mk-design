import { ReactNode } from 'react';

import { MKFiltersEnum } from 'types';

export interface MKFiltersOptionProps<V = unknown> {
  label: ReactNode;
  value: V;
}

export interface MKFiltersOptionsProps<V> {
  type: MKFiltersEnum.Options;
  label?: ReactNode;
  placeholder?: string;
  value: V[];
  options: MKFiltersOptionProps<V>[];
  setValue?: (value: V[]) => void;
}

export const MKFiltersOptions = <V = unknown,>({ value, options, setValue }: MKFiltersOptionsProps<V>) => {
  console.log(value, options, setValue);
  return null;
};

export const generateOptionsFilter = <V = unknown,>(props: MKFiltersOptionsProps<V>) => ({
  ...props,
  type: MKFiltersEnum.Options,
  render: (props: MKFiltersOptionsProps<V>) => <MKFiltersOptions<V> {...props} />,
});
