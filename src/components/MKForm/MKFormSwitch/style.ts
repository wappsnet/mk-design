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
        left: 1.2em;
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
        pointer-events: all;
      }

      &:after {
        background-image: none;
        pointer-events: all;
      }
    }
  }

  ${({ mkValid, mkInvalid }) => {
    if (mkValid) {
      return css`
        ~ label {
          color: var(--color-info-success);

          &:before {
            border-color: currentColor;
          }
        }
      `;
    }

    if (mkInvalid) {
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

export const MKFormSwitchLabelStyled = styled('label')`
  min-height: 1em;
  min-width: 1em;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--mk-space-scale-2);
  cursor: pointer;
  padding-left: 2.5em;
  line-height: 1.25;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1em;
    width: 2em;
    border-radius: var(--mk-border-radius-base);
    border: 1px solid currentColor;
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
    height: 0.6em;
    top: 0.2em;
    left: 0.2em;
    border-radius: 100%;
    border: 1px solid currentColor;
    background: var(--color-neutral-light);
  }

  &:empty {
    padding-left: 0;
  }
`;
