import { cloneElement, FC, ReactElement, useEffect, useRef } from 'react';

import './style.scss';

interface MKAnimateStylesProps {
  animation?:
    | 'mk-slide-right'
    | 'mk-slide-left'
    | 'mk-slide-up'
    | 'mk-slide-down'
    | 'mk-scale-up-center'
    | 'mk-scale-down-center'
    | 'mk-scale-right';
  className?: string;
  children: ReactElement;
  delay?: number;
  deps?: any;
}

const MKAnimateStyles: FC<MKAnimateStylesProps> = ({ children, deps, animation, delay = 300, ...props }) => {
  const depsRef = useRef(deps);

  useEffect(() => {
    const timer = setTimeout(() => {
      depsRef.current = deps;
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [deps, delay]);

  return cloneElement(children, {
    ...props,
    ...children.props,
    style: {
      ...children.props.style,
      animationName: deps !== depsRef.current ? animation : null,
      animationDuration: `${delay}ms`,
      transitionDuration: `${delay}ms`,
    },
  });
};

export default MKAnimateStyles;
