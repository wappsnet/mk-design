import { AllHTMLAttributes, FC, ReactElement, ReactNode, useMemo, useRef } from 'react';
import classNames from 'classnames';

import { MKDelayProps, MKPlacementTypes, MKStyleVariants, MKTriggerEventTypes } from 'types';
import { normalizeDelay } from 'helpers';
import MKOverlay from 'core/MKOverlay';
import './style.scss';

interface MKTooltipProps {
  arrow?: boolean;
  delay?: MKDelayProps;
  className?: string;
  active?: boolean;
  placement?: MKPlacementTypes;
  hideOnScroll?: boolean;
  variant: MKStyleVariants;
  children: ReactElement<AllHTMLAttributes<HTMLElement>>;
  triggers?: MKTriggerEventTypes[];
  overlay?: ReactNode;
}

const MKTooltip: FC<MKTooltipProps> = ({
  active = true,
  arrow = true,
  hideOnScroll = false,
  delay = {
    show: 200,
    hide: 200,
  },
  overlay,
  children,
  className = '',
  triggers = ['hover', 'focus', 'blur'],
  variant = 'primary',
  placement = 'auto',
}) => {
  const delayId = useRef(0);
  const duration = useMemo(() => normalizeDelay(delay), [delay]);

  if (active) {
    return (
      <MKOverlay>
        {(state, setState) => (
          <>
            <MKOverlay.Trigger
              state={state}
              setState={(data) => {
                window.clearTimeout(delayId.current);
                delayId.current = window.setTimeout(
                  () => {
                    setState(data);
                  },
                  data ? duration.show : duration.hide,
                );
              }}
              placement={placement}
              triggers={triggers}
            >
              {children}
            </MKOverlay.Trigger>
            {state && (
              <MKOverlay.Content
                className="mk-tooltip-wrapper"
                state={state}
                setState={(data) => {
                  window.clearTimeout(delayId.current);
                  delayId.current = window.setTimeout(
                    () => {
                      setState(data);
                    },
                    data ? duration.show : duration.hide,
                  );
                }}
                placement={placement}
                hideOnScroll={hideOnScroll}
                triggers={triggers}
                centralize
              >
                {({ placement, translateX, translateY }) => (
                  <div data-placement={placement} className={classNames(['mk-tooltip', variant, className])}>
                    {arrow && (
                      <div
                        className="mk-tooltip__arrow"
                        style={{
                          marginLeft: -(translateX || 0),
                          marginTop: -(translateY || 0),
                        }}
                      />
                    )}
                    <div className="mk-tooltip-inner">{overlay || children}</div>
                  </div>
                )}
              </MKOverlay.Content>
            )}
          </>
        )}
      </MKOverlay>
    );
  }

  return <>{children}</>;
};

export default MKTooltip;
