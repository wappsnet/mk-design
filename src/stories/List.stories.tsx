import { Meta } from '@storybook/react';

import MKList from 'modules/MKList';
import MKAvatar from 'modules/MKAvatar';
import MKImage from 'core/MKImage';

export const List: Meta<typeof MKList> = {
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
};

List.args = {
  header: 'HEADER',
  footer: 'FOOTER',
};

const ListStories = {
  title: 'List',
  component: MKList,
  subcomponents: {
    Item: MKList.Item,
  },
};

export default ListStories;
