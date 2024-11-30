import {QueryFunctionContext, useQuery, UseQueryOptions} from "@tanstack/react-query";
import {client} from "@/lib/axiosInstance";


interface ApiResponse<T> {
    response: {
        status: string;
        data: T;
        links?: {
            first_page_url?: string;
            last_page_url?: string;
            next_page_url?: string;
            prev_page_url?: string;
        }
        meta?: {
            path?: string;
            current_page?: number;
            from?: number;
            per_page?: number;
            to?: number;
            total?: number;
            pages?: number;
        };
    }
}

type UseGetOptions<T> = {
    endpoint: string;
    params?: Record<string, unknown>;
    queryOptions?: Omit<UseQueryOptions<ApiResponse<T>, Error>, "queryKey" | "queryFn">;
};

export function useGet<T = unknown>({
    endpoint,
    params,
    queryOptions,
 }: UseGetOptions<T>) {
    return useQuery<ApiResponse<T>, Error>({
        queryKey: [endpoint, params],
        queryFn: ({ signal }: QueryFunctionContext) =>
            client
                .get<ApiResponse<T>>(endpoint, { params, signal })
                .then((response) => response.data),
        ...queryOptions,
    });
}