import { MKModalBody } from './MKModalBody';
import { MKModalFooter } from './MKModalFooter';
import { MKModalHeader } from './MKModalHeader';
import { MKModalTitle } from './MKModalTitle';
import { MKModalWrapper } from './MKModalWrapper';

export const MKModal = Object.assign(MKModalWrapper, {
  Header: MKModalHeader,
  Footer: MKModalFooter,
  Body: MKModalBody,
  Title: MKModalTitle,
});
