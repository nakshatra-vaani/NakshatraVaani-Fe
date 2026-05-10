import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import axiosInstance from "@/lib/axios";
import { setToken, clearToken } from "@/lib/token";
import {
  LoginPayload,
  SignupPayload,
  AuthResponse,
} from "@/types/auth.types";

// ─── Login ────────────────────────────────────────────────────────────────────

export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  // Step 1: Sign in with Firebase using email
  // emailOrPhone field used as email for Firebase
  const credential = await signInWithEmailAndPassword(
    auth,
    data.emailOrPhone,
    data.password
  );

  // Step 2: Get Firebase ID token
  const firebaseToken = await credential.user.getIdToken();

  // Step 3: Send Firebase token to your backend for verification
  // Backend verifies it and returns your app's own JWT
  const response = await axiosInstance.post<AuthResponse>("/auth/login", {
    firebaseToken,
  });

  // Step 4: Store your backend's token
  setToken(response.data.token);

  return response.data;
};

// ─── Signup ───────────────────────────────────────────────────────────────────

export const signupUser = async (data: SignupPayload): Promise<AuthResponse> => {
  // Step 1: Create Firebase user with email + password
  const credential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  // Step 2: Get Firebase ID token
  const firebaseToken = await credential.user.getIdToken();

  // Step 3: Send Firebase token + birth detail payload to your backend
  // Backend creates the user record and returns your app's JWT
  const response = await axiosInstance.post<AuthResponse>("/auth/signup", {
    firebaseToken,
    name: data.name,
    email: data.email,
    phone: data.phone,
    dateOfBirth: data.dateOfBirth,
    timeOfBirth: data.timeOfBirth,
    placeOfBirth: data.placeOfBirth,
  });

  // Step 4: Store your backend's token
  setToken(response.data.token);

  return response.data;
};

// ─── Google OAuth ─────────────────────────────────────────────────────────────

export const loginWithGoogle = async (): Promise<AuthResponse> => {
  const provider = new GoogleAuthProvider();

  // Opens Google popup
  const credential = await signInWithPopup(auth, provider);
  const firebaseToken = await credential.user.getIdToken();

  const response = await axiosInstance.post<AuthResponse>("/auth/google", {
    firebaseToken,
  });

  setToken(response.data.token);

  return response.data;
};

// ─── Logout ───────────────────────────────────────────────────────────────────

export const logoutUser = async (): Promise<void> => {
  // Sign out from Firebase
  await signOut(auth);

  // Clear your backend token
  clearToken();
};