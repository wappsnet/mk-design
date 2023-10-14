import { cloneElement, FC, MouseEvent, FocusEvent, ReactElement, AllHTMLAttributes } from 'react';
import classNames from 'classnames';

import { MKOverlayStateProps, MKPlacementTypes, MKTriggerEventTypes } from 'types';

export interface MKOverlayTriggerProps {
  active?: boolean;
  show?: boolean;
  toggle?: boolean;
  state: MKOverlayStateProps | null;
  setState: (state: MKOverlayStateProps | null) => void;
  triggers?: MKTriggerEventTypes[];
  placement?: MKPlacementTypes;
  className?: string;
  children: ReactElement<AllHTMLAttributes<HTMLElement>>;
}

export const MKOverlayTrigger: FC<MKOverlayTriggerProps> = ({
  active = true,
  toggle = false,
  state,
  setState,
  children,
  className,
  triggers = ['hover', 'focus'],
}) => {
  if (active) {
    return cloneElement(children, {
      ...children.props,
      className: classNames(className, children.props.className),
      onMouseDown: (e: MouseEvent<HTMLElement>) => {
        if (triggers.includes('click')) {
          if (toggle && state) {
            setState(null);
          } else {
            setState({
              target: e.currentTarget,
            });
          }
        }
        children.props?.onMouseDown?.(e);
      },
      onMouseOver: (e: MouseEvent<HTMLElement>) => {
        if (triggers.includes('hover')) {
          setState({
            target: e.currentTarget,
          });
        }

        if (triggers.includes('visibility')) {
          if (e.currentTarget.scrollWidth > e.currentTarget.clientWidth) {
            setState({
              target: e.currentTarget,
            });
          }
        }

        children.props?.onMouseOver?.(e);
      },
      onMouseOut: (e: MouseEvent<HTMLElement>) => {
        if (triggers.includes('hover') || triggers.includes('visibility')) {
          setState(null);
        }

        children.props?.onMouseOut?.(e);
      },
      onFocus: (e: FocusEvent<HTMLElement>) => {
        if (triggers.includes('focus')) {
          setState({
            target: e.currentTarget,
          });
        }

        if (triggers.includes('visibility')) {
          if (e.currentTarget.scrollWidth > e.currentTarget.clientWidth) {
            setState({
              target: e.currentTarget,
            });
          }
        }

        children.props?.onFocus?.(e);
      },
      onBlur: (e: FocusEvent<HTMLElement>) => {
        if (triggers.includes('blur') || triggers?.includes('visibility')) {
          setState(null);
        }

        children.props?.onBlur?.(e);
      },
    });
  }

  return children;
};

export default MKOverlayTrigger;
