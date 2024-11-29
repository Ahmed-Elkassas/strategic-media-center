import {useMutation} from "@tanstack/react-query";
import {login} from "@/services/authService";

interface LoginVariables {
    email: string;
    password: string;
}

export const useLogin = ()=> {
    return useMutation({
        mutationFn: ({email, password}: LoginVariables) => login(email, password),
        onSuccess: (data) => {
            const token = data?.response?.data?.token;
            const userName = data?.response?.data?.name
            const email = data?.response?.data?.email

            if(token) {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify({userName, email}));
            }
        }
    })
}