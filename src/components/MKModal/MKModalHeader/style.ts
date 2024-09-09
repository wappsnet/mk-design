import styled from '@emotion/styled';

export const MKModalHeaderStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: var(--mk-space-scale-2);
  gap: var(--mk-space-scale-2);
  border-bottom: 1px solid var(--color-neutral-stroke);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const MKModalHeaderTitleStyled = styled('div')`
  display: flex;
  gap: var(--mk-space-scale-2);
  align-items: center;
`;

export const MKModalHeaderIconStyled = styled('span')`
  font-size: var(--mk-font-size-scale-4);
  font-weight: bold;
  color: var(--color-brand-primary);
`;

export const MKModalHeaderCloseStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  aspect-ratio: 1;
  height: 100%;
  font-weight: bold;
  flex-shrink: 0;
  font-size: var(--mk-font-size-scale-3);
  line-height: 1;
  color: var(--color-brand-primary);
  cursor: pointer;
  background-color: transparent;
  border: 0;
  opacity: 0.5;

  &:focus,
  &:active,
  &:hover {
    opacity: 1;
  }
`;
