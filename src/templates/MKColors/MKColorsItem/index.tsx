import './style.scss';

import { FC, ReactNode } from 'react';

import { MKTypo } from 'core/MKTypo';

import { MKTag } from 'components/MKTag';

export interface MKColorsItemProps {
  color: string;
  name: string;
  title?: ReactNode;
  subtitle?: ReactNode;
}

export const MKColorsItem: FC<MKColorsItemProps> = ({ color, name, title, subtitle }) => (
  <div className="mk-colors-item">
    <div
      className="mk-colors-item__box"
      style={{
        background: color,
      }}
    />
    <div className="mk-colors-item__info">
      {title && (
        <MKTypo.Text bold center truncate>
          {title}
        </MKTypo.Text>
      )}
      {subtitle && (
        <MKTypo.Text bold theme="secondary">
          {subtitle}
        </MKTypo.Text>
      )}
      {name && <MKTag>{name}</MKTag>}
    </div>
  </div>
);
