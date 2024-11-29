import {useMutation} from "@tanstack/react-query";
import { subscription} from "@/services/authService";
import {SubscriptionFormValues} from "@/types/form";


export const useCreateSubscription = () => {
    return useMutation({
        mutationFn: (userData: SubscriptionFormValues) => subscription(userData),
    })
}