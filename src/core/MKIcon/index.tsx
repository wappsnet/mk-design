import './style.scss';

import { FC, SVGProps } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

import { AddressBookSvg } from 'icons/address-book';
import { AddressCardSvg } from 'icons/address-card';
import { BarsSolidSvg } from 'icons/bars-solid';
import { BellSvg } from 'icons/bell';
import { BellSlashSvg } from 'icons/bell-slash';
import { BitBucketSvg } from 'icons/bitbucket';
import { BuildingSvg } from 'icons/building';
import { CalendarSvg } from 'icons/calendar';
import { CalendarCheckSvg } from 'icons/calendar-check';
import { ChartLineSolidSvg } from 'icons/chart-line-solid';
import { CircleDownSvg } from 'icons/circle-down';
import { CircleInfoSolidSvg } from 'icons/circle-info-solid';
import { GearsSolidSvg } from 'icons/gears-solid';
import { GoogleSvg } from 'icons/google';
import { LayerGroupSolidSvg } from 'icons/layer-group-solid';
import { PeopleGroupSolidSvg } from 'icons/people-group-solid';
import { SignOutSolidSvg } from 'icons/right-from-bracket-solid';
import { SitemapSolidSvg } from 'icons/sitemap-solid';
import { SquarePlusSvg } from 'icons/square-plus';
import { UserGearSolidSvg } from 'icons/user-gear-solid';
import { XMarkSolidSvg } from 'icons/xmark-solid';

const SVG_ICONS = {
  [`address-book`]: AddressBookSvg,
  [`address-card`]: AddressCardSvg,
  [`xmark`]: XMarkSolidSvg,
  [`bars`]: BarsSolidSvg,
  [`bell`]: BellSvg,
  [`bell-slash`]: BellSlashSvg,
  [`building`]: BuildingSvg,
  [`calendar`]: CalendarSvg,
  [`calendar-check`]: CalendarCheckSvg,
  [`circle-down`]: CircleDownSvg,
  [`google`]: GoogleSvg,
  [`bitbucket`]: BitBucketSvg,
  [`sign-out`]: SignOutSolidSvg,
  [`user-gear`]: UserGearSolidSvg,
  [`people-group`]: PeopleGroupSolidSvg,
  [`sitemap`]: SitemapSolidSvg,
  [`gears`]: GearsSolidSvg,
  [`square-plus`]: SquarePlusSvg,
  [`layer-group`]: LayerGroupSolidSvg,
  [`chart-line`]: ChartLineSolidSvg,
  [`circle-info`]: CircleInfoSolidSvg,
};

export interface MKIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof SVG_ICONS;
  className?: string;
  design?: MKStyleVariants;
}

export const MKIcon: FC<MKIconProps> = ({ name, className = '', ...props }) => {
  const Icon = SVG_ICONS[name];
  return (
    <span className={classNames('mk-svg-icon', className)}>
      <Icon {...props} />
    </span>
  );
};
