import styled from '@emotion/styled';

export const MKLayoutHeaderNavStyled = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MKLayoutHeaderBrandStyled = styled('div')`
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MKLayoutHeaderToggleStyled = styled('button')`
  height: 100%;
  aspect-ratio: 1/1;
  padding: var(--mk-space-scale-2);
  background-color: transparent;
  font-size: var(--mk-font-size-scale-4);
  color: var(--color-neutral-med);
  border: 0;
  cursor: pointer;

  &:hover {
    color: var(--color-brand-primary);
  }
`;

export const MKLayoutHeaderStyled = styled('div')`
  width: 100%;
  height: var(--mk-header-height);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-neutral-stroke);
  z-index: 1;

  .mk-layout-header__toggle {
    height: 100%;
    aspect-ratio: 1/1;
    padding: var(--mk-space-scale-2);
    background-color: transparent;
    font-size: var(--mk-font-size-scale-4);
    color: var(--color-neutral-med);
    border: 0;
    cursor: pointer;

    &:hover {
      color: var(--color-brand-primary);
    }
  }
`;
