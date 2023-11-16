import { FC } from 'react';

import './style.scss';

export interface MKPillProps {
  duration: number;
}

export const MKPill: FC<MKPillProps> = () => <span className="mk-pill" />;
