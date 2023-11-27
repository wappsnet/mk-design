import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKFormGroupProps {
  align?: 'column' | 'row';
  children: ReactNode;
  type?: 'section' | 'container';
}

export const MKFormGroup: FC<MKFormGroupProps> = ({ align = 'column', type = 'section', children, ...props }) => (
  <div {...props} className={classNames('mk-fom-group', `group-${align}`, type)}>
    {children}
  </div>
);
