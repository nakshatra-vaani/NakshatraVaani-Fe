import { useAuthContext } from "@/context/AuthContext";

// Clean one-line import for any component that needs auth state
export function useAuth() {
  return useAuthContext();
}