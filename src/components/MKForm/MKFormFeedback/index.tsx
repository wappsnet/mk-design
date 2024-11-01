import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKFormFeedbackStyled } from './style';

export interface MKFormFeedbackProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  touched?: boolean;
  variant?: 'invalid' | 'warning' | 'valid';
}

export const MKFormFeedback: FC<MKFormFeedbackProps> = ({
  className = '',
  touched = false,
  children,
  variant = 'invalid',
  ...props
}) => {
  if (touched && !!children) {
    return (
      <MKFormFeedbackStyled {...props} className={clsx('mk-form-feedback', className)} mkVariant={variant}>
        {children}
      </MKFormFeedbackStyled>
    );
  }

  return null;
};
