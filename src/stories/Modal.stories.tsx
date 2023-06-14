import { Meta } from '@storybook/react';

import MKModal from 'modules/MKModal';
import MKButton from 'modules/MKButton';

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
};

Modal.args = {
  show: true,
};

const ModalStories = {
  title: 'Modal',
  component: MKModal,
};

export default ModalStories;
