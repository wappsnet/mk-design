import { FC } from 'react';
import './style.scss';

export interface MKPillProps {
  duration: number;
}

const MKPill: FC<MKPillProps> = () => <span className="mk-pill" />;

export default MKPill;
