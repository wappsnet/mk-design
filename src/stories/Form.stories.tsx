import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormWrapperStory: Meta<typeof MKForm.Wrapper> = {
  render: (args) => (
    <MKForm.Wrapper {...args}>
      <MKForm.Group type="container">
        <MKForm.Group>
          <MKForm.Label>{'Input'}</MKForm.Label>
          <MKForm.Input />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label>{'Select'}</MKForm.Label>
          <MKForm.Select>
            <option>{'option 1'}</option>
            <option>{'option 2'}</option>
            <option>{'option 3'}</option>
            <option>{'option 4'}</option>
          </MKForm.Select>
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label>{'Range'}</MKForm.Label>
          <MKForm.Range />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label>{'Switch'}</MKForm.Label>
          <MKForm.Switch name="switch" id="switch" label="swicth-1" />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label>{'Radio'}</MKForm.Label>
          <MKForm.Radio name="radio" id="radio-1" label="radio-1" />
          <MKForm.Radio name="radio" id="radio-2" label="radio-2" />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label>{'Checkbox'}</MKForm.Label>
          <MKForm.Checkbox name="checkbox" id="checkbox-1" label="checkbox-1" />
          <MKForm.Checkbox name="checkbox" id="checkbox-2" label="checkbox-2" />
        </MKForm.Group>
      </MKForm.Group>
    </MKForm.Wrapper>
  ),
};

export default {
  title: 'Form/Wrapper',
  component: MKForm.Wrapper,
  meta: MKFormWrapperStory,
};
