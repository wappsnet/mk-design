import './style.scss';

import { FC } from 'react';

export interface MKPillProps {
  duration: number;
}

export const MKPill: FC<MKPillProps> = () => <span className="mk-pill" />;
