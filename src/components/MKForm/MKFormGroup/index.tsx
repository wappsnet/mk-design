import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

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
