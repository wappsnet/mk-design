import { Meta } from '@storybook/react';

import MKForm from 'components/MKForm';

export const Input: Meta<typeof MKForm.Input> = {
  render: (args) => <MKForm.Input {...args} />,
  args: {
    value: '',
  },
};

export const Select: Meta<typeof MKForm.Select> = {
  render: (args) => (
    <MKForm.Select {...args}>
      {['first', 'second', 'third'].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </MKForm.Select>
  ),
  args: {
    value: '',
  },
};

export const Number: Meta<typeof MKForm.Number> = {
  render: (args) => <MKForm.Number {...args} />,
  args: {
    value: 1,
  },
};

export const Checkbox: Meta<typeof MKForm.Checkbox> = {
  render: (args) => <MKForm.Checkbox {...args} />,
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    id: 'checkbox',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export const Radio: Meta<typeof MKForm.Radio> = {
  render: (args) => <MKForm.Radio {...args} />,
  args: {
    label: 'Radio',
    name: 'radio',
    id: 'radio',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export const Switch: Meta<typeof MKForm.Switch> = {
  render: (args) => <MKForm.Switch {...args} />,
  args: {
    label: 'Switch',
    name: 'switch',
    id: 'switch',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export const Date: Meta<typeof MKForm.Date> = {
  render: (args) => <MKForm.Date {...args} />,
  args: {
    name: 'date',
    id: 'date',
    type: 'date',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export const Range: Meta<typeof MKForm.Range> = {
  render: (args) => <MKForm.Range {...args} />,
  args: {
    name: 'range',
    id: 'range',
    isValid: false,
    isInvalid: false,
    disabled: false,
    value: 0,
    min: 0,
    max: 100,
    step: 1,
  },
};

const FormStories = {
  title: 'Form',
  component: MKForm,
  subcomponents: {
    Input: MKForm.Input,
    Select: MKForm.Select,
    Radio: MKForm.Radio,
    Checkbox: MKForm.Checkbox,
    Range: MKForm.Range,
    Number: MKForm.Number,
    Switch: MKForm.Switch,
    Date: MKForm.Date,
  },
};

export default FormStories;
