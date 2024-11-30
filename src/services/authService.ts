import { client } from "@/lib/axiosInstance";
import {SignupFormValues, SubscriptionFormValues} from "@/types/form";

export const login = async (email: string, password: string) => {
  const response = await client.post(`/user/v1/login`, { email, password });
  return response.data;
};

export const signup = async (userData: SignupFormValues) => {
  const response = await client.post("/user/v1/register", userData);
  return response.data;
};

export const subscription = async (userData: SubscriptionFormValues) => {
  const response = await client.post("/user/v1/memberships", userData);
  return response.data;
};

// !Todo check the body request
export const forgotPassword = async (email: string) => {
  const response = await client.post("/user/v1/forgot-password", { email });
  return response.data;
};

// !Todo check the body request
export const resetPassword = async (token: string, newPassword: string) => {
  const response = await client.post("/user/v1/reset-password", {
    token,
    password: newPassword
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadFile = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await client.post(`/user/v1/upload-file`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  return response.data;
};


export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem('tokenExpiresAt');
  }
};