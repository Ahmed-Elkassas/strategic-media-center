import { useCreate } from "@/hooks/useCreate";

export function useDropdownData() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useCreate<any, { keys: string }>({
        endpoint: "/user/v1/appConfig-Dropdown",
    });
}
