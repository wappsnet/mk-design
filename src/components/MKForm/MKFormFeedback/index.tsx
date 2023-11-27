import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKFormFeedbackProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  touched?: boolean;
  variant?: 'invalid' | 'valid';
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
      <span className={classNames('mk-form-feedback', className, variant)} {...props}>
        {children}
      </span>
    );
  }

  return null;
};
