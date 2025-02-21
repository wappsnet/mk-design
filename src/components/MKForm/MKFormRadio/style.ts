import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormRadioStyled = styled('div')`
  position: relative;
  font-size: 1rem;
  width: fit-content;
`;

export const MKFormRadioInputStyled = styled('input')<{
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

export const MKFormRadioLabelStyled = styled('label')`
  min-height: 1em;
  min-width: 1em;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  cursor: pointer;
  font-size: 1em;

  [data-component='mk-checkmark'] {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    aspect-ratio: 1/1;
    border-radius: 100%;
    border: 1px solid var(--color-neutral-stroke);
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    background-color: var(--color-neutral-light);

    &:after {
      content: '';
      width: 0.6em;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      border: 1px solid var(--color-neutral-light);
      background: currentColor;
      opacity: 0;
    }
  }
`;

export const MKFormRadioRequiredStyled = styled('span')`
  color: var(--color-info-danger-dark);
`;

export const MKFormRadioDescriptionStyled = styled('div')`
  width: 100%;
  color: var(--color-neutral-dim);
`;
