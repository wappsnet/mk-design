import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormCheckboxStyled = styled('div')`
  position: relative;
  font-size: 1rem;
`;

export const MKFormCheckboxInputStyled = styled('input')<{
  valid: boolean;
  invalid: boolean;
  disabled: boolean;
}>`
  position: absolute;
  left: 0;
  z-index: -1;
  opacity: 0;
  pointer-events: all;
  margin: 0;
  border-spacing: 0;

  &:focus,
  &:hover {
    ~ label {
      color: var(--color-brand-secondary);

      &:after {
        color: currentColor;
      }

      &:before {
        box-shadow: none;
        border-color: currentColor;
      }
    }
  }

  &:active {
    ~ label {
      color: var(--color-brand-secondary);

      &:after {
        color: currentColor;
      }

      &:before {
        box-shadow: none;
        border-color: currentColor;
        background-color: currentColor;
      }
    }
  }

  &:checked {
    ~ label {
      color: var(--color-brand-primary);

      &:after {
        color: currentColor;
        opacity: 1;
        background-image: none;
      }

      &:before {
        border-color: currentColor;
        background-color: currentColor;
      }
    }

    &:active,
    &:focus,
    &:hover {
      ~ label {
        color: var(--color-brand-secondary);

        &:after {
          color: currentColor;
          opacity: 1;
          background-image: none;
        }

        &:before {
          border-color: currentColor;
          background-color: currentColor;
        }
      }
    }
  }

  :disabled {
    ~ label {
      pointer-events: all;
      cursor: not-allowed;
      color: var(--color-disabled-dark);

      &:before {
        box-shadow: none;
        border-color: currentColor;
        background-color: var(--color-disabled-light);
        pointer-events: all;
      }

      &:after {
        opacity: 0;
        background-image: none;
        pointer-events: all;
      }
    }
  }

  ${({ valid, invalid }) => {
    if (valid) {
      return css`
        ~ label {
          color: var(--color-info-success);

          &:before {
            border-color: currentColor;
          }
        }
      `;
    }

    if (invalid) {
      return css`
        ~ label {
          color: var(--color-info-danger);

          &:before {
            border-color: currentColor;
          }
        }
      `;
    }
  }}
`;

export const MKFormCheckboxLabelStyled = styled('label')`
  min-height: 1em;
  min-width: 1em;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  cursor: pointer;
  padding-left: 2em;
  line-height: 1.25;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    border-radius: 0.25em;
    border: 2px solid var(--color-neutral-stroke);
    transition: all 0.3s ease-in-out;
    display: block;
    pointer-events: none;
    background-color: var(--color-neutral-light);
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 0.6em;
    height: 0.4em;
    top: 0.25em;
    left: 0.25em;
    border: 3px solid var(--color-neutral-light);
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-45deg);
  }

  &:empty {
    padding-left: 0;

    &:before {
      top: 0;
    }
  }
`;

export const MKFormCheckboxRequiredStyled = styled('span')`
  color: var(--color-info-danger-dark);
`;

export const MKFormCheckboxDescriptionStyled = styled('div')`
  width: 100%;
  color: var(--color-neutral-dim);
`;
