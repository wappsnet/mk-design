import { ReactNode } from 'react';

export interface MKFiltersOptionProps<V> {
  label: ReactNode;
  value: V;
}

export interface MKFiltersOptionsProps<V> {
  type: 'options';
  label?: ReactNode;
  placeholder?: string;
  value: V[];
  options: MKFiltersOptionProps<V>[];
  setValue: (value: V[]) => void;
}

export const MKFiltersOptions = <V = unknown,>({ value, options, setValue }: MKFiltersOptionsProps<V>) => {
  console.log(value, options, setValue);
  return null;
};

export const generateOptionsFilter = <V = unknown,>(props: MKFiltersOptionsProps<V>) => ({
  ...props,
  render: (props: MKFiltersOptionsProps<V>) => <MKFiltersOptions {...props} />,
});
