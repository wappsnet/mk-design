import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

type MKSliderItemProps = {
  children?: ReactNode;
  slideIndex: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: (index: number) => void;
};

const MKSliderItem: FC<MKSliderItemProps> = ({ children, active = false, disabled = false, slideIndex, onClick }) => {
  return (
    <div
      role="tab"
      tabIndex={!disabled && !active && !!onClick ? 0 : -1}
      className={classNames('mk-slider-item', { disabled }, { active })}
      onClick={() => !disabled && !active && onClick?.(slideIndex)}
      onKeyUp={() => !disabled && !active && onClick?.(slideIndex)}
    >
      {children}
    </div>
  );
};

export default MKSliderItem;
