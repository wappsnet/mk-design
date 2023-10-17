import { FC, SVGProps } from 'react';
import classNames from 'classnames';

import { AddressBookSvg } from 'icons/address-book';
import { AddressCardSvg } from 'icons/address-card';
import { BellSvg } from 'icons/bell';
import { BellSlashSvg } from 'icons/bell-slash';
import { CalendarSvg } from 'icons/calendar';
import { BuildingSvg } from 'icons/building';
import { CalendarCheckSvg } from 'icons/calendar-check';
import { CircleDownSvg } from 'icons/circle-down';
import './style.scss';

const SVG_ICONS = {
  [`address-book`]: AddressBookSvg,
  [`address-card`]: AddressCardSvg,
  [`bell`]: BellSvg,
  [`bell-slash`]: BellSlashSvg,
  [`building`]: BuildingSvg,
  [`calendar`]: CalendarSvg,
  [`calendar-check`]: CalendarCheckSvg,
  [`circle-down`]: CircleDownSvg,
};

export interface MKIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof SVG_ICONS;
  className?: string;
}

export const MKIcon: FC<MKIconProps> = ({ name, className = '', ...props }) => {
  const Icon = SVG_ICONS[name];
  return (
    <span className={classNames('mk-svg-icon', className)}>
      <Icon {...props} />
    </span>
  );
};
