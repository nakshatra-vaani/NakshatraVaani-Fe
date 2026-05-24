import axiosInstance from "@/lib/axios";
import {
  SignupPayload,
  LoginPayload,
  AuthResponse,
} from "@/types/auth.types";

export const signupUser = async (
  data: SignupPayload
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/signup", data);

  return response.data;
};

export const loginUser = async (
  data: LoginPayload
): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/auth/login", data);

  return response.data;
};