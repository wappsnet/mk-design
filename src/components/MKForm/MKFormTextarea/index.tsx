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
}

export const MKFormTextarea: FC<MKFormTextareaProps> = ({
  shape = 'round',
  valid = false,
  invalid = false,
  disabled = false,
  resize = 'vertical',
  className = '',
  ...props
}) => (
  <MKFormTextareaStyled
    {...props}
    className={clsx('mk-form-textarea', shape, { valid, invalid, disabled }, `resize-${resize}`, className)}
    shape={shape}
    resize={resize}
    disabled={disabled}
    valid={valid}
    invalid={invalid}
  />
);
