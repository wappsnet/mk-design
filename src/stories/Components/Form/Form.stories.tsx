import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormWrapperStory: Meta<typeof MKForm.Wrapper> = {
  render: (args) => (
    <MKForm.Wrapper {...args}>
      <MKForm.Group grid="container">
        <MKForm.Group>
          <MKForm.Label htmlFor="input">{'Input'}</MKForm.Label>
          <MKForm.Input id="input" />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label htmlFor="select">{'Select'}</MKForm.Label>
          <MKForm.Select id="select">
            <option>{'option 1'}</option>
            <option>{'option 2'}</option>
            <option>{'option 3'}</option>
            <option>{'option 4'}</option>
          </MKForm.Select>
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label htmlFor="range">{'Range'}</MKForm.Label>
          <MKForm.Range id="range" />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label htmlFor="switch">{'Switch'}</MKForm.Label>
          <MKForm.Switch name="switch" id="switch" label="swicth-1" />
        </MKForm.Group>
        <MKForm.Group>
          <MKForm.Label htmlFor="radio-1">{'Radio'}</MKForm.Label>
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
  title: 'Components/Form',
  component: MKForm.Wrapper,
  meta: MKFormWrapperStory,
};
