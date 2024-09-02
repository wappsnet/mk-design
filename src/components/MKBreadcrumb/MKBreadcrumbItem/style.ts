import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BreadcrumbItemStyled = styled.li<{ active?: boolean }>`
  width: max-content;
  display: flex;
  align-items: center;
  color: var(--color-info-link);
  text-decoration: none;

  ${(props) =>
    !props.active &&
    css`
      a {
        box-shadow: var(--mk-shadow-xs);
        background-color: var(--color-brand-primary-light);
      }
    `}

  a {
    display: inline-flex;
    align-items: center;
    line-height: initial;
    text-decoration: none;
    gap: var(--mk-space-scale-2);
    padding: var(--mk-space-scale-2);
    border-radius: var(--mk-border-radius-xs);
  }

  ${(props) =>
    props.active &&
    css`
      color: var(--color-neutral-med);

      a {
        color: currentColor;
        text-decoration: none;
      }
    `}
`;