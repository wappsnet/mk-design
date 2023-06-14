import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { MKShapeVariants } from 'types';
import './style.scss';

export interface MKFormSelectProps extends HTMLAttributes<HTMLSelectElement> {
  shape?: MKShapeVariants;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string | number;
}

const MKFormSelect: FC<MKFormSelectProps> = ({
  shape = 'round',
  valid = false,
  invalid = false,
  disabled = false,
  value,
  className = '',
  onChange,
  onInput,
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

export default MKFormSelect;
