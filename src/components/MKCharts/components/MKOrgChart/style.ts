import styled from '@emotion/styled';

export const MKOrgChartStyled = styled('div')`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const MKOrgChartNodeItemStyled = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: var(--mk-space-scale-2);
  pointer-events: auto;
  z-index: 10;
`;
