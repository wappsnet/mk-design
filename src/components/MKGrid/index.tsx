import { default as Wrapper } from './MKGridWrapper';
import { default as Row } from './MKGridRow';
import { default as Col } from './MKGridCol';

const MKGrid = Object.assign(Wrapper, {
  Row,
  Col,
});

export default MKGrid;
