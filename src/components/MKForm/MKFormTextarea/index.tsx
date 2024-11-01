import { FC, TextareaHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import { MKResizeTypes, MKShapeTypes } from 'types';

import { MKFormTextareaStyled } from './style';

export interface MKFormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  shape?: MKShapeTypes;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string;
  resize?: MKResizeTypes;
  id: string;
  name: string;
}

export const MKFormTextarea: FC<MKFormTextareaProps> = ({
  shape = 'base',
  valid = false,
  invalid = false,
  disabled = false,
  resize = 'vertical',
  name,
  id,
  className = '',
  ...props
}) => (
  <MKFormTextareaStyled
    {...props}
    name={name}
    id={id}
    className={clsx('mk-form-textarea', className)}
    mkShape={shape}
    mkResize={resize}
    disabled={disabled}
    mkDisabled={disabled}
    mkValid={valid}
    mkInvalid={invalid}
  />
);
