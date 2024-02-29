import { Meta } from '@storybook/react';

import { MK_COLORS } from 'definitions';
import { MKColors } from 'templates/MKColors';

export const MKColorsStory: Meta<typeof MKColors> = {
  render: (args) => (
    <MKColors {...args}>
      {Object.entries(MK_COLORS).map(([key, palette]) => (
        <MKColors.Palette
          key={key}
          header={`${key} colors`}
          colors={Object.entries(palette).map(([name, color]) => ({
            name: `var(--color-${key}-${name})`,
            color: color,
            title: name,
          }))}
          renderItem={(data) => (
            <MKColors.Item name={data.name} title={data.title} color={data.color} subtitle={data.subtitle} />
          )}
        />
      ))}
    </MKColors>
  ),
  args: {},
};

export default {
  title: 'Theme/MQColors',
  component: MKColors,
  meta: MKColorsStory,
};
