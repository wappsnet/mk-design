import { FC, LabelHTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKIcon } from 'core/MKIcon';

import {
  MKFormLabelDescriptionStyled,
  MKFormLabelInfoIconStyled,
  MKFormLabelRequiredStyled,
  MKFormLabelStyled,
  MKFormLabelTitleStyled,
} from './style';

export interface MKFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  htmlFor?: string;
}

export const MKFormLabel: FC<MKFormLabelProps> = ({
  className = '',
  children,
  required = false,
  description,
  ...props
}) => (
  <MKFormLabelStyled {...props} className={clsx('mk-form-label', className)}>
    {children && (
      <MKFormLabelTitleStyled className="mk-form-label__title">
        {children}
        {required && <MKFormLabelRequiredStyled className="mk-form-label__required">{'*'}</MKFormLabelRequiredStyled>}
      </MKFormLabelTitleStyled>
    )}
    {description && (
      <MKFormLabelDescriptionStyled className="mk-form-label__description">
        <MKFormLabelInfoIconStyled className="mk-form-label__info">
          <MKIcon icon="circle-info" />
        </MKFormLabelInfoIconStyled>
        {description}
      </MKFormLabelDescriptionStyled>
    )}
  </MKFormLabelStyled>
);
