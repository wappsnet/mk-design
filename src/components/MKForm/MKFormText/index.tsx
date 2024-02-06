import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKIcon } from 'core/MKIcon';

export interface MKFormTextProps {
  variant?: 'caption' | 'info' | 'description';
  className?: string;
  children?: ReactNode;
}

export const MKFormText: FC<MKFormTextProps> = ({ className = '', variant = 'info', children }) => (
  <span className={classNames('mk-form-text', className, variant)}>
    {variant === 'info' && <MKIcon icon="circle-info" />}
    {children}
  </span>
);

export default MKFormText;
