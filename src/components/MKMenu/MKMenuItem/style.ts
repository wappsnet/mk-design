import styled from '@emotion/styled';

export const MKMenuItemStyled = styled('li')`
  position: relative;
  border-radius: inherit;

  &:not(:last-child) {
    border-right: inherit;
  }
`;
