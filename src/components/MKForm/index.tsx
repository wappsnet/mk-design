import { default as Input } from './MKFormInput';
import { default as Select } from './MKFormSelect';
import { default as Number } from './MKFormNumber';
import { default as Wrapper } from './MKFormWrapper';
import { default as Checkbox } from './MKFormCheckbox';
import { default as Radio } from './MKFormRadio';
import { default as Switch } from './MKFormSwitch';
import { default as Date } from './MKFormDate';
import { default as Range } from './MKFormRange';
import { default as Label } from './MKFormLabel';

const MKForm = Object.assign(Wrapper, {
  Input,
  Select,
  Number,
  Checkbox,
  Radio,
  Switch,
  Date,
  Range,
  Label,
});

export default MKForm;
