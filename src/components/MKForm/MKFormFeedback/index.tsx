import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

export interface MKFormFeedbackProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  touched?: boolean;
  centered?: boolean;
  strong?: boolean;
  variant?: 'invalid' | 'valid';
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
      <span className={clsx('mk-form-feedback', className, variant, { strong, centered })} {...props}>
        {children}
      </span>
    );
  }

  return null;
};
