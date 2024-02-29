import { MKColorsItem } from './MKColorsItem';
import { MKColorsPalette } from './MKColorsPalette';
import { MKColorsWrapper } from './MKColorsWrapper';

export const MKColors = Object.assign(MKColorsWrapper, {
  Item: MKColorsItem,
  Palette: MKColorsPalette,
});
