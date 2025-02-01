import { cloneElement, createRef, FC, useCallback, ReactElement } from 'react';

import { MKUploadInputStyled } from './style';

type MKUploadTriggerProps = 'click' | 'drop';

interface MKUploadChildProps {
  onClick?: (e: Event) => void;
  onDrop?: (e: DragEvent) => void;
}

export interface MKUploadProps {
  onUpload: (files: FileList) => void;
  onReject?: (files: FileList) => void;
  triggers?: MKUploadTriggerProps[];
  name?: string;
  extensions: string[];
  children: ReactElement<MKUploadChildProps>;
  disabled?: boolean;
}

export const MKUpload: FC<MKUploadProps> = ({
  name,
  triggers = ['click', 'drop'],
  children,
  disabled = false,
  extensions,
  onUpload,
  onReject,
  ...props
}) => {
  const hiddenFileInput = createRef<HTMLInputElement>();

  const handleUpload = useCallback(
    (files: FileList) => {
      let allowUpload = true;

      for (const file of files) {
        const fileName = file.name.toLowerCase();
        const extension = fileName.split('.').pop();
        const fileType = file.type;

        if ((fileType && !extensions.includes(fileType)) || (!fileType && !extensions.includes(`.${extension}`))) {
          allowUpload = false;
          break;
        }
      }

      if (allowUpload) {
        onUpload(files);
      } else if (onReject) {
        onReject(files);
      }
    },
    [extensions, onReject, onUpload],
  );

  return (
    <>
      <MKUploadInputStyled
        ref={hiddenFileInput}
        className="mk-file-hidden"
        type="file"
        name={name}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.files?.length) {
            handleUpload(e.target.files);
          }
        }}
        accept={extensions.join(', ')}
        disabled={disabled}
      />
      {!!children &&
        cloneElement(children, {
          ...props,
          ...children.props,
          onClick: (e) => {
            if (triggers.includes('click')) {
              children.props.onClick?.(e);
              if (hiddenFileInput.current) {
                hiddenFileInput.current.value = '';
                hiddenFileInput.current.click();
              }
            }
          },
          onDrop: (e) => {
            if (triggers.includes('drop')) {
              if (e.dataTransfer?.files.length) {
                e.preventDefault();
                handleUpload(e.dataTransfer.files);
              }
            }
          },
        })}
    </>
  );
};
