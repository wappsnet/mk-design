import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormSwitchStyled = styled('div')`
  position: relative;
  font-size: 1rem;
`;

export const MKFormSwitchInputStyled = styled('input')<{
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
        justify-content: flex-end;

        &:after {
          color: currentColor;
          opacity: 1;
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

export const MKFormSwitchLabelStyled = styled('label')`
  min-height: 1.5em;
  min-width: 1.5em;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  cursor: pointer;

  [data-component='mk-checkmark'] {
    content: '';
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height: 1em;
    width: 2em;
    padding: 0.1em;
    border-radius: 0.25em;
    border: 0.1em solid currentColor;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    background-color: var(--color-neutral-light);

    &:after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      border-radius: 100%;
      border: 0.1em solid currentColor;
      background: var(--color-neutral-light);
    }
  }
`;
