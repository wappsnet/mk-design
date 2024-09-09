import { Meta } from '@storybook/react';

import { MKButton } from 'components/MKButton';
import { MKModal } from 'components/MKModal';

export const MKModalStory: Meta<typeof MKModal> = {
  render: ({ ...args }) => (
    <MKModal {...args}>
      <MKModal.Header closeButton>
        <MKModal.Title>{'Test Modal'}</MKModal.Title>
      </MKModal.Header>
      <MKModal.Body>{'Modal Content'}</MKModal.Body>
      <MKModal.Footer>
        <MKButton theme="secondary" onClick={args.onHide}>
          {'cancel'}
        </MKButton>
        <MKButton theme="primary">{'confirm'}</MKButton>
      </MKModal.Footer>
    </MKModal>
  ),
};

export default {
  title: 'Components/Modal',
  component: MKModal,
  meta: MKModalStory,
};
