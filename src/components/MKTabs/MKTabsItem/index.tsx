import { ReactNode, useContext, useMemo, ComponentProps, FC, useCallback } from 'react';

import { clsx } from 'clsx';

import { MKTabsContext } from 'context';
import { MKChildIconProps, MKDesignTypes, MKTabShapeTypes } from 'types';

import { MKLink } from 'core/MKLink';

import { MKTabStyled } from './style';

export interface MKTabProps extends ComponentProps<typeof MKLink> {
  children?: ReactNode;
  icon?: MKChildIconProps;
  label: ReactNode;
  name: string;
  bordered?: boolean;
  disabled?: boolean;
  className?: string;
  design?: MKDesignTypes;
  shape?: MKTabShapeTypes;
}

export const MKTabsItem: FC<MKTabProps> = ({
  children,
  to,
  disabled = false,
  isActive,
  name,
  icon,
  label,
  className = '',
  as = 'a',
  ...props
}) => {
  const { setActive, active, ...context } = useContext(MKTabsContext);

  const design = useMemo(() => props.design ?? context.design, [context.design, props.design]);
  const shape = useMemo(() => props.shape ?? context.shape, [context.shape, props.shape]);
  const bordered = useMemo(() => props.bordered ?? context.bordered, [context.bordered, props.bordered]);

  const isActiveItem = useMemo(() => isActive?.() ?? active === name, [active, name, isActive]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      setActive?.(to ?? name);
    }
  }, [disabled, name, setActive, to]);

  const content = useMemo(() => {
    const title = label ?? children;
    return (
      <>
        {icon?.position === 'start' && <span className="start-icon">{icon.node}</span>}
        {title && <span className="mk-tab__title">{title}</span>}
        {icon?.position === 'end' && <span className="start-icon">{icon.node}</span>}
      </>
    );
  }, [icon?.position, icon?.node, label, children]);

  return (
    <MKTabStyled
      as={as}
      className={clsx('mk-tab', className)}
      onClick={handleClick}
      mkActive={isActiveItem}
      mkDisabled={disabled}
      mkDesign={design}
      mkShape={shape}
      mkBordered={bordered}
      {...props}
    >
      {content}
    </MKTabStyled>
  );
};
