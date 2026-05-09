import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border rounded-xl">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <LoginForm />
      </div>
    </div>
  );
}