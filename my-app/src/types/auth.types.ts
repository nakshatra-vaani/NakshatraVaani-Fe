export interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  password: string;
  confirmPassword: string;
}

export interface LoginPayload {
  emailOrPhone: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
    placeOfBirth?: string;
  };
}