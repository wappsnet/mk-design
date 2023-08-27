import { FC, HTMLAttributes } from 'react';

export type MKFormWrapperProps = HTMLAttributes<HTMLFormElement>;

const MKFormWrapper: FC<MKFormWrapperProps> = ({ children, ...props }) => <form {...props}>{children}</form>;

export default MKFormWrapper;
