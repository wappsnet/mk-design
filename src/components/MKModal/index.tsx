import { MKModalBody } from './MKModalBody';
import { MKModalFooter } from './MKModalFooter';
import { MKModalHeader } from './MKModalHeader';
import { MKModalWrapper } from './MKModalWrapper';
import { MKModalTitle } from './MKModalTitle';

export const MKModal = Object.assign(MKModalWrapper, {
  Header: MKModalHeader,
  Footer: MKModalFooter,
  Body: MKModalBody,
  Title: MKModalTitle,
});
