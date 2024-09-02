import styled from '@emotion/styled';

export const MKAvatarInfoStyled = styled.div`
  border-radius: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: bold;

  &:not(.borderless) {
    border: 1px solid currentColor;
  }

  &.primary {
    color: var(--color-neutral-light);
    background-color: var(--color-brand-primary);
  }

  &.secondary {
    color: var(--color-neutral-light);
    background-color: var(--color-brand-secondary);
  }

  &.warning {
    color: var(--color-neutral-light);
    background-color: var(--color-info-warning);
  }

  &.success {
    color: var(--color-neutral-light);
    background-color: var(--color-info-success);
  }

  &.danger {
    color: var(--color-neutral-light);
    background-color: var(--color-info-danger);
  }

  &.large {
    font-size: var(--mk-font-size-scale-8);
  }

  &.medium {
    font-size: var(--mk-font-size-scale-7);
  }

  &.small {
    font-size: var(--mk-font-size-scale-4);
  }

  &.tiny {
    font-size: var(--mk-font-size-scale-1);
  }
`;