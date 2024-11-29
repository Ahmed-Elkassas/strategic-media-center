// useUpload.ts
import { useMutation } from '@tanstack/react-query';
import { uploadFile } from '@/services/authService';
import { AxiosError } from 'axios';

interface UploadResponse {
    url: string;
}

export const useUploadMedia = () => {
    return useMutation<UploadResponse, AxiosError, File>({
        mutationFn: (file: File) => uploadFile(file),
    });
};
