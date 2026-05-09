import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 border rounded-xl">
        <h1 className="text-3xl font-bold mb-6">
          Signup
        </h1>

        <SignupForm />
      </div>
    </div>
  );
}