import './style.scss';

import { FC, InputHTMLAttributes } from 'react';

import classNames from 'classnames';

import { MKShapeVariants } from 'types';

export interface MKFormSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  shape?: MKShapeVariants;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string | number;
}

export const MKFormSelect: FC<MKFormSelectProps> = ({
  shape = 'round',
  valid = false,
  invalid = false,
  disabled = false,
  value,
  className = '',
  onChange,
  onBlur,
  ...props
}) => (
  <select
    className={classNames(['mk-form-input', className, shape, { valid }, { invalid }])}
    onChange={(e) => {
      if (!disabled) {
        onChange?.(e);
      }
    }}
    onBlur={(e) => {
      if (!disabled) {
        onBlur?.(e);
      }
    }}
    value={value}
    {...props}
  />
);
