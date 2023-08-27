import { default as Body } from './MKModalBody';
import { default as Footer } from './MKModalFooter';
import { default as Header } from './MKModalHeader';
import { default as Wrapper } from './MKModalWrapper';
import { default as Title } from './MKModalTitle';

const MKModal = Object.assign(Wrapper, {
  Header,
  Footer,
  Body,
  Title,
});

export default MKModal;
