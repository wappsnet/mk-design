import { Meta } from '@storybook/react';

import { MKImage } from 'core/MKImage';

import { MKAvatar } from 'components/MKAvatar';
import { MKList } from 'components/MKList';

export const MKListStory: Meta<typeof MKList> = {
  render: (args) => (
    <MKList {...args}>
      <MKList.Item
        start={<MKAvatar.Image size="small" title={'Abgar Gasparyan'} />}
        label={'Label 1'}
        description={'description 1'}
        end={<MKImage width={100} />}
      >
        {'Content 1'}
      </MKList.Item>
      <MKList.Item
        start={<MKAvatar.Image size="small" title={'Abdulah Karapetov'} />}
        label={'Label 2'}
        description={'description 2'}
        end={<MKImage width={100} />}
      >
        {'Content 2'}
      </MKList.Item>
    </MKList>
  ),
  args: {
    header: 'HEADER',
    footer: 'FOOTER',
  },
};

export default {
  title: 'Core/List',
  component: MKList,
  meta: MKListStory,
};
