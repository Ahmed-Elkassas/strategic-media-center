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
            const responseData = data?.response?.data;
            const token = responseData?.token;
            const userName = responseData?.name
            const email = responseData?.email
            const expire = responseData?.expire;

            if(token && expire) {
                localStorage.setItem("token", token);
                localStorage.setItem('tokenExpiresAt', expire.toString());
                localStorage.setItem("user", JSON.stringify({userName, email}));
            }
        }
    })
}