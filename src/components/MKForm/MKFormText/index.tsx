import { FC, ReactNode, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKIcon } from 'core/MKIcon';

import { MKFormTextStyled } from './style';

export interface MKFormTextProps {
  variant?: 'caption' | 'info' | 'description';
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

export const MKFormText: FC<MKFormTextProps> = ({ className = '', variant = 'info', icon, children }) => {
  const prefix = useMemo(() => {
    if (icon) {
      return icon;
    }

    if (variant === 'info') {
      return <MKIcon icon="circle-info" />;
    }
  }, [icon, variant]);

  return (
    <MKFormTextStyled className={clsx('mk-form-text', className)} mkVariant={variant}>
      {prefix}
      {children}
    </MKFormTextStyled>
  );
};

export default MKFormText;
