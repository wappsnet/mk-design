import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKFormFeedbackStyled } from './style';

export interface MKFormFeedbackProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  touched?: boolean;
  centered?: boolean;
  strong?: boolean;
  variant?: 'invalid' | 'warning' | 'valid';
}

export const MKFormFeedback: FC<MKFormFeedbackProps> = ({
  className = '',
  touched = false,
  centered = false,
  strong = false,
  children,
  variant = 'invalid',
  ...props
}) => {
  if (touched && !!children) {
    return (
      <MKFormFeedbackStyled
        className={clsx('mk-form-feedback', className, variant, { strong, centered })}
        variant={variant}
        {...props}
      >
        {children}
      </MKFormFeedbackStyled>
    );
  }

  return null;
};
