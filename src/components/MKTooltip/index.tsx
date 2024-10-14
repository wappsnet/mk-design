import { AllHTMLAttributes, FC, ReactElement, ReactNode, useMemo, useRef } from 'react';

import { clsx } from 'clsx';

import { normalizeDelay } from 'helpers';
import { MKDelayProps, MKPlacementTypes, MKDesignVariants, MKTriggerEventTypes } from 'types';

import { MKOverlay } from 'core/MKOverlay';

import { MKTooltipArrowStyled, MKTooltipInnerStyled, MKTooltipStyled, MKTooltipWrapperStyled } from './style';

export interface MKTooltipProps {
  arrow?: boolean;
  delay?: MKDelayProps;
  className?: string;
  active?: boolean;
  placement?: MKPlacementTypes;
  hideOnScroll?: boolean;
  design?: MKDesignVariants;
  children: ReactElement<AllHTMLAttributes<HTMLElement>>;
  triggers?: MKTriggerEventTypes[];
  overlay?: ReactNode;
}

export const MKTooltip: FC<MKTooltipProps> = ({
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
  design = 'primary',
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
              <MKTooltipWrapperStyled
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
                  <MKTooltipStyled
                    data-placement={placement}
                    className={clsx(['mk-tooltip', design, className])}
                    design={design}
                    placement={placement}
                  >
                    {arrow && (
                      <MKTooltipArrowStyled
                        className="mk-tooltip__arrow"
                        marginLeft={-(translateX ?? 0)}
                        marginRight={-(translateY ?? 0)}
                        placement={placement}
                      />
                    )}
                    <MKTooltipInnerStyled className="mk-tooltip-inner">{overlay || children}</MKTooltipInnerStyled>
                  </MKTooltipStyled>
                )}
              </MKTooltipWrapperStyled>
            )}
          </>
        )}
      </MKOverlay>
    );
  }

  return <>{children}</>;
};
