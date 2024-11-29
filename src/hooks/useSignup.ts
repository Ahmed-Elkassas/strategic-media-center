import {useMutation} from "@tanstack/react-query";
import {signup} from "@/services/authService";
import {SignupFormValues} from "@/types/form";


export const useSignup = () => {
    return useMutation({
        mutationFn: (userData: SignupFormValues) => signup(userData),

    })
}