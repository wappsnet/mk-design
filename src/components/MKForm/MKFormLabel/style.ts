import styled from '@emotion/styled';

export const MKFormLabelStyled = styled('label')`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5;
`;

export const MKFormLabelTitleStyled = styled('span')`
  font-weight: bold;
`;

export const MKFormLabelRequiredStyled = styled('code')`
  font-weight: bold;
  color: var(--color-info-danger);
`;

export const MKFormLabelDescriptionStyled = styled('caption')`
  width: 100%;
  color: var(--color-neutral-med);
  font-style: italic;
`;

export const MKFormLabelInfoIconStyled = styled('span')`
  color: var(--color-info-new);
  margin-right: var(--mk-space-scale-2);
`;
