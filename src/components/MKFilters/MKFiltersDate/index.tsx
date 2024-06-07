import { FC } from 'react';

import { MKFiltersEnum } from 'types';

export interface MKFiltersDateRangeProps {
  from: number | null;
  to: number | null;
}

export interface MKFiltersDateProps {
  type: MKFiltersEnum.Date;
  placeholder?: string;
  value: MKFiltersDateRangeProps;
  setValue: (value: MKFiltersDateRangeProps) => void;
}

export const MKFiltersDate: FC<MKFiltersDateProps> = ({ value, placeholder, setValue }) => {
  console.log(value, placeholder, setValue);
  return null;
};

export const generateDateFilter = (props: MKFiltersDateProps) => ({
  ...props,
  type: MKFiltersEnum.Date,
  render: (props: MKFiltersDateProps) => <MKFiltersDate {...props} />,
});
