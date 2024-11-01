import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import {
  MKFormFieldAppendStyled,
  MKFormFieldOverlayStyled,
  MKFormFieldPrependStyled,
  MKFormFieldStyled,
  MKFormFiledInputStyled,
} from './style';

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
  <MKFormFieldStyled withAppend={!!append} withPrepend={!!prepend} className={clsx('mk-form-field', className)}>
    {!!prepend && <MKFormFieldPrependStyled className="mk-form-field__prepend">{prepend}</MKFormFieldPrependStyled>}
    {!!children && (
      <MKFormFiledInputStyled
        withPrepend={!!prepend}
        withAppend={!!append}
        withPrefix={overlay?.position === 'start'}
        withPostfix={overlay?.position === 'end'}
        className="mk-form-field__input"
      >
        {children}
        {!!overlay && (
          <MKFormFieldOverlayStyled mkPosition={overlay.position} className="mk-form-field__overlay">
            {overlay.node}
          </MKFormFieldOverlayStyled>
        )}
      </MKFormFiledInputStyled>
    )}
    {!!append && <MKFormFieldAppendStyled className="mk-form-field__append">{append}</MKFormFieldAppendStyled>}
  </MKFormFieldStyled>
);

export default MKFormField;
