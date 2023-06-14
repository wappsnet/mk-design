declare module '*.jpg';
declare module '*.gif';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.png';
declare module '*.svg';
declare module '*.ico';
declare module '*.jfif';
declare module '*.pdf';
declare module '*.ttf';

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module '*.png' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
