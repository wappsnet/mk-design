import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormCheckboxStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
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

  &:focus ~ label,
  &:hover ~ label {
    &:after {
      color: var(--color-neutral-light);
    }

    &:before {
      box-shadow: none;
      border-color: var(--color-brand-secondary);
    }
  }

  &:active ~ label {
    &:after {
      color: var(--color-neutral-light);
    }

    &:before {
      box-shadow: none;
      border-color: var(--color-brand-secondary);
      background-color: var(--color-neutral-light);
    }
  }

  &:checked ~ label {
    &:after {
      color: var(--color-neutral-light);
      opacity: 1;
      background-image: none;
    }

    &:before {
      border-color: var(--color-brand-primary);
      background-color: var(--color-brand-primary);
    }
  }

  &:checked {
    &:active ~ label,
    &:focus ~ label,
    &:hover ~ label {
      &:after {
        color: var(--color-neutral-light);
        opacity: 1;
        background-image: none;
      }

      &:before {
        border-color: var(--color-brand-secondary);
        background-color: var(--color-brand-secondary);
      }
    }

    &:disabled ~ label {
      cursor: not-allowed;

      &:before {
        background-color: var(--color-disabled-light);
        border-color: var(--color-disabled-dark);
      }

      &:after {
        opacity: 1;
        box-shadow: none;
        background-image: none;
        background-color: var(--color-disabled-dark);
      }
    }
  }

  &:disabled {
    & ~ label {
      pointer-events: all;
      cursor: not-allowed;
      color: var(--color-disabled-dark);

      &:before {
        box-shadow: none;
        border-color: var(--color-disabled-dark);
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

  ${({ disabled, valid, invalid }) => {
    if (!disabled) {
      if (valid) {
        return css`
          ~ label {
            color: var(--color-info-success);

            &:before {
              border-color: var(--color-info-success);
            }
          }
        `;
      }

      if (invalid) {
        return css`
          ~ label {
            color: var(--color-info-danger);

            &:before {
              border-color: var(--color-info-danger);
            }
          }
        `;
      }
    }

    return css`
      ~ label {
        pointer-events: all;
        cursor: not-allowed;
        color: var(--color-disabled-dark);

        &:before {
          box-shadow: none;
          border-color: var(--color-disabled-dark);
          background-color: var(--color-disabled-light);
          pointer-events: all;
        }

        &:after {
          opacity: 0;
          background-image: none;
          pointer-events: all;
        }
      }
    `;
  }}
`;

export const MKFormCheckboxLabelStyled = styled('label')`
  min-height: 1rem;
  min-width: 1rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: var(--mk-font-size-scale-2);
  cursor: pointer;
  padding-left: 2em;
  line-height: 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 0.25rem;
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
    width: 0.6rem;
    height: 0.4rem;
    top: 0.6rem;
    left: 0.2rem;
    border: 3px solid var(--color-neutral-light);
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-45deg);
  }

  &:empty {
    padding-left: var(--mk-space-scale-4);

    &:before {
      top: 0;
    }

    &:after {
      top: 0.2rem;
    }
  }
`;

export const MKFormCheckboxRequiredStyled = styled('span')`
  padding-left: var(--mk-space-scale-2);
  color: var(--color-info-danger-dark);
  font-weight: bold;
`;

export const MKFormCheckboxDescriptionStyled = styled('div')`
  width: 100%;
  color: var(--color-neutral-med);
`;
