import { Meta } from '@storybook/react';

import { MKFilters } from 'components/MKFilters';

import { MKFiltersEnum } from '../../../types';

export const MKAvatarImageStory: Meta<typeof MKFilters> = {
  render: (args) => <MKFilters {...args} />,
  args: {
    filters: {
      search: {
        name: 'search',
        type: MKFiltersEnum.Search,
        details: {
          type: MKFiltersEnum.Search,
          value: '',
          placeholder: 'Search',
        },
      },
      options: {
        name: 'options',
        type: MKFiltersEnum.Options,
        details: {
          type: MKFiltersEnum.Options,
          value: ['ankap'],
          label: 'Search',
          options: [
            {
              label: 'Ankap',
              value: 'ankap',
            },
          ],
        },
      },
    },
  },
};

export default {
  title: 'Components/Filters',
  component: MKFilters,
  meta: MKAvatarImageStory,
};
