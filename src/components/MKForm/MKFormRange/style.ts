import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormRangeStyled = styled('div')<{
  invalid: boolean;
  valid: boolean;
  disabled: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  position: relative;
  color: var(--color-brand-primary);
  border-radius: var(--mk-border-radius-sm);

  ${({ valid }) =>
    valid &&
    css`
      color: var(--color-info-success);
    `}

  ${({ invalid }) =>
    invalid &&
    css`
      color: var(--color-info-danger);
    `}
  
  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--color-disabled-light);
    `}
`;

export const MKFormRangeInputStyled = styled('input')<{}>`
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: inherit;
  height: 0.5rem;
  background: var(--color-neutral-cover);
  color: var(--color-brand-primary);

  /* Thumb: webkit */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    background-color: currentColor;
    border-radius: 50%;
    border: none;
    transition: inherit;
  }

  /* Thumb: Firefox */
  &::-moz-range-thumb {
    height: 1.25rem;
    width: 1.25rem;
    background-color: currentColor;
    border-radius: 50%;
    border: none;
    transition: inherit;
  }

  &::-webkit-slider-runnable-track {
    position: absolute;
    left: 0;
    right: 0;
  }

  /* Hover, active & focus Thumb: Webkit */
  &::-webkit-slider-thumb:hover {
    box-shadow: var(--mk-shadow-sm);
  }

  &:active::-webkit-slider-thumb {
    box-shadow: var(--mk-shadow-sm);
  }

  &:focus::-webkit-slider-thumb {
    box-shadow: var(--mk-shadow-sm);
  }

  /* Hover, active & focus Thumb: Firefox */
  &::-moz-range-thumb:hover {
    box-shadow: var(--mk-shadow-sm);
  }

  &:active::-moz-range-thumb {
    box-shadow: var(--mk-shadow-sm);
  }

  &:focus::-moz-range-thumb {
    box-shadow: var(--mk-shadow-sm);
  }
`;

export const MKFormRangeProgressStyled = styled('span')<{
  value: number;
  max: number;
  min: number;
}>`
  height: 0.5rem;
  max-width: 100%;
  left: 0;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  display: block;
  border-radius: inherit;
  color: inherit;
  background-color: currentColor;
  z-index: 1;

  ${({ value, min, max }) => css`
    width: ${Math.round(Math.max(min, Math.min(value, max)) / max) * 100}%;
  `}
`;
