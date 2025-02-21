import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormCheckboxStyled = styled('div')`
  position: relative;
  font-size: 1rem;
  width: fit-content;
`;

export const MKFormCheckboxInputStyled = styled('input')<{
  mkValid: boolean;
  mkInvalid: boolean;
  mkDisabled: boolean;
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

      [data-component='mk-checkmark'] {
        box-shadow: none;
        border-color: currentColor;

        &:after {
          color: currentColor;
        }
      }
    }
  }

  &:active {
    ~ label {
      color: var(--color-brand-secondary);

      [data-component='mk-checkmark'] {
        box-shadow: none;
        border-color: currentColor;
        background-color: currentColor;

        &:after {
          color: currentColor;
        }
      }
    }
  }

  &:checked {
    ~ label {
      color: var(--color-brand-primary);

      [data-component='mk-checkmark'] {
        border-color: currentColor;
        background-color: currentColor;

        &:after {
          color: currentColor;
          opacity: 1;
          background-image: none;
        }
      }
    }

    &:active,
    &:focus,
    &:hover {
      ~ label {
        color: var(--color-brand-secondary);

        [data-component='mk-checkmark'] {
          border-color: currentColor;
          background-color: currentColor;

          &:after {
            color: currentColor;
            opacity: 1;
            background-image: none;
          }
        }
      }
    }
  }

  :disabled {
    ~ label {
      pointer-events: all;
      cursor: not-allowed;
      color: var(--color-disabled-dark);

      [data-component='mk-checkmark'] {
        box-shadow: none;
        border-color: currentColor;
        background-color: var(--color-disabled-light);
        pointer-events: all;

        &:after {
          opacity: 0;
          background-image: none;
          pointer-events: all;
        }
      }
    }
  }

  ${({ mkValid, mkInvalid }) => {
    if (mkValid) {
      return css`
        ~ label {
          color: var(--color-info-success);

          [data-component='mk-checkmark'] {
            border-color: currentColor;
          }
        }
      `;
    }

    if (mkInvalid) {
      return css`
        ~ label {
          color: var(--color-info-danger);

          [data-component='mk-checkmark'] {
            border-color: currentColor;
          }
        }
      `;
    }
  }}
`;

export const MKFormCheckboxLabelStyled = styled('label')`
  min-height: 1.5em;
  min-width: 1.5em;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  cursor: pointer;

  [data-component='mk-checkmark'] {
    height: 1em;
    width: 1em;
    position: relative;
    flex-shrink: 0;
    border-radius: 0.125em;
    border: 1px solid var(--color-neutral-stroke);
    transition: all 0.3s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: var(--color-neutral-light);

    &:after {
      content: '';
      position: absolute;
      width: 0.4em;
      height: 0.4em;
      margin-top: -0.1em;
      border: 0.125em solid var(--color-neutral-light);
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
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
