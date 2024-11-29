import React from "react";
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {useUploadMedia} from "@/hooks/useUploadMedia";


interface UploadButtonProps {
    onUploadSuccess?: (data: unknown) => void;
    multiple?: boolean;
    accept?: string;
}

 const UploadMediaButton: React.FC<UploadButtonProps> = ({onUploadSuccess, multiple = false, accept}) =>  {
    const { mutate: uploadMutate, isPending } = useUploadMedia();

    const handleUpload = (file: File) => {
        uploadMutate(file, {
            onSuccess: (data) => {
                message.success('File uploaded successfully');
                if (onUploadSuccess) {
                    onUploadSuccess(data);
                }
            },
            onError: () => {
                message.error('Failed to upload file');
            },
        });
        return false; // Prevent default upload behavior since we're handling it manually
    };

    return (
        <Upload
            beforeUpload={handleUpload}
            multiple={multiple}
            showUploadList={false}
            accept={accept}
        >
            <Button icon={<UploadOutlined />} loading={isPending}>
                {isPending ? 'Uploading' : 'Upload'}
            </Button>
        </Upload>
    );
};

export default UploadMediaButton;