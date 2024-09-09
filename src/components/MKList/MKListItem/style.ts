import styled from '@emotion/styled';

export const MKListItemStyled = styled('li')`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MKListItemStartStyled = styled('div')`
  width: auto;
  padding: var(--mk-space-scale-2);
`;

export const MKListItemEndStyled = styled('div')`
  flex: 0;
  width: auto;
  padding: var(--mk-space-scale-2);
`;

export const MKListItemContentStyled = styled('div')`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
`;

export const MKListItemContentLabelStyled = styled('div')`
  font-weight: bold;
  font-size: var(--mk-font-size-scale-3);
`;

export const MKListItemContentDescriptionStyled = styled('div')`
  font-size: var(--mk-font-size-scale-3);
`;

export const MKListItemExtraStyled = styled('div')`
  flex: 0;
  width: auto;
  padding: var(--mk-space-scale-2);
`;

export const MKListItemActionsStyled = styled('div')`
  flex: 0;
  width: auto;
  padding: var(--mk-space-scale-2);
`;
