
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { client } from '@/lib/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface UseCreateOptions<TData, TVariables, TContext = unknown> {
    endpoint: string;
    mutationOptions?: Omit<
        UseMutationOptions<AxiosResponse<TData>, AxiosError, TVariables, TContext>,
        'mutationFn'
    >;
}

export function useCreate<TData = unknown, TVariables = unknown, TContext = unknown>({
         endpoint,
         mutationOptions,
     }: UseCreateOptions<TData, TVariables, TContext>): UseMutationResult<
    AxiosResponse<TData>,
    AxiosError,
    TVariables,
    TContext
> {
    return useMutation<AxiosResponse<TData>, AxiosError, TVariables, TContext>({
        mutationFn: (variables: TVariables) => client.post<TData>(endpoint, variables),
        ...mutationOptions,
    });
}

