import { FC, ReactNode } from 'react';

export interface MKFormatterProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
}

export const MKFormatter: FC<MKFormatterProps> = ({ prefix, suffix, children }) => (
  <>
    {prefix} {children} {suffix}
  </>
);
