import { MKFormInput } from './MKFormInput';
import { MKFormSelect } from './MKFormSelect';
import { MKFormNumber } from './MKFormNumber';
import { MKFormWrapper } from './MKFormWrapper';
import { MKFormCheckbox } from './MKFormCheckbox';
import { MKFormRadio } from './MKFormRadio';
import { MKFormSwitch } from './MKFormSwitch';
import { MKFormDate } from './MKFormDate';
import { MKFormRange } from './MKFormRange';
import { MKFormLabel } from './MKFormLabel';
import { MKFormGroup } from './MKFormGroup';

export const MKForm = Object.assign(MKFormWrapper, {
  Wrapper: MKFormWrapper,
  Group: MKFormGroup,
  Input: MKFormInput,
  Select: MKFormSelect,
  Number: MKFormNumber,
  Checkbox: MKFormCheckbox,
  Radio: MKFormRadio,
  Switch: MKFormSwitch,
  Date: MKFormDate,
  Range: MKFormRange,
  Label: MKFormLabel,
});
