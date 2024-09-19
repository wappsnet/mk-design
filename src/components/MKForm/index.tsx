import { MKFormCheckbox } from './MKFormCheckbox';
import { MKFormDate } from './MKFormDate';
import { MKFormFeedback } from './MKFormFeedback';
import { MKFormField } from './MKFormField';
import { MKFormGroup } from './MKFormGroup';
import { MKFormInput } from './MKFormInput';
import { MKFormLabel } from './MKFormLabel';
import { MKFormNumber } from './MKFormNumber';
import { MKFormRadio } from './MKFormRadio';
import { MKFormRange } from './MKFormRange';
import { MKFormSelect } from './MKFormSelect';
import { MKFormSwitch } from './MKFormSwitch';
import { MKFormText } from './MKFormText';
import { MKFormTextarea } from './MKFormTextarea';
import { MKFormWrapper } from './MKFormWrapper';

export const MKForm = Object.assign(MKFormWrapper, {
  Wrapper: MKFormWrapper,
  Group: MKFormGroup,
  Input: MKFormInput,
  Select: MKFormSelect,
  Number: MKFormNumber,
  Checkbox: MKFormCheckbox,
  Radio: MKFormRadio,
  Switch: MKFormSwitch,
  Textarea: MKFormTextarea,
  Date: MKFormDate,
  Range: MKFormRange,
  Text: MKFormText,
  Label: MKFormLabel,
  Feedback: MKFormFeedback,
  Field: MKFormField,
});
