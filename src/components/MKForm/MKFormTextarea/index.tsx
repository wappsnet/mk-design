import './style.scss';

import { FC, TextareaHTMLAttributes } from 'react';

import classNames from 'classnames';

import { MKShapeVariants } from 'types';

export interface MKFormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  shape?: MKShapeVariants;
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
  value?: string;
  resize?: 'none' | 'both' | 'vertical' | 'horizontal';
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
  <textarea
    {...props}
    className={classNames('mk-form-textarea', shape, { valid, invalid, disabled }, `resize-${resize}`, className)}
  />
);
