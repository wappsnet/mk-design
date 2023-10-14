declare module '*.jpg';
declare module '*.gif';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.png';
declare module '*.ico';
declare module '*.jfif';
declare module '*.pdf';
declare module '*.ttf';
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const src: string;

  export default src;
}
