import { Meta } from '@storybook/react';

import MKModal from 'components/MKModal';
import MKButton from 'components/MKButton';

export const Modal: Meta<typeof MKModal> = {
  render: (args) => (
    <MKModal {...args}>
      <MKModal.Header closeButton>
        <MKModal.Title>{'Test Modal'}</MKModal.Title>
      </MKModal.Header>
      <MKModal.Body>{'Modal Content'}</MKModal.Body>
      <MKModal.Footer>
        <MKButton variant="secondary" onClick={args.onHide}>
          {'cancel'}
        </MKButton>
        <MKButton variant="primary">{'confirm'}</MKButton>
      </MKModal.Footer>
    </MKModal>
  ),
  args: {
    show: true,
  },
};

const ModalStories = {
  title: 'Modal',
  component: MKModal,
  subcomponents: {
    Header: MKModal.Header,
    Footer: MKModal.Footer,
    Body: MKModal.Body,
    Title: MKModal.Title,
  },
};

export default ModalStories;
