import './style.scss';

import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

interface MKFormFieldOverlayProps {
  node: ReactNode;
  position: 'start' | 'end';
}

export interface MKFormFieldProps {
  prepend?: ReactNode;
  append?: ReactNode;
  children?: ReactNode;
  className?: string;
  overlay?: MKFormFieldOverlayProps;
}

export const MKFormField: FC<MKFormFieldProps> = ({ className = '', overlay, prepend, append, children }) => (
  <div className={clsx('mk-form-field', className)}>
    {!!prepend && <div className="mk-form-field__prepend">{prepend}</div>}
    {!!children && (
      <div className="mk-form-field__input">
        {children}
        {!!overlay && <div className={clsx('mk-form-field__overlay', overlay.position)}>{overlay.node}</div>}
      </div>
    )}
    {!!append && <div className="mk-form-field__append">{append}</div>}
  </div>
);

export default MKFormField;
