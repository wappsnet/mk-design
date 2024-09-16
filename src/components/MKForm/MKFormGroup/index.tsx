import './style.scss';

import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKFormGroupProps {
  align?: 'column' | 'row';
  children: ReactNode;
  type?: 'section' | 'container';
}

export const MKFormGroup: FC<MKFormGroupProps> = ({ align = 'column', type = 'section', children, ...props }) => (
  <div {...props} className={clsx('mk-fom-group', `group-${align}`, type)}>
    {children}
  </div>
);
