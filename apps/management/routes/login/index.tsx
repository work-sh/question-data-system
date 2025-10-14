import { LoginForm } from "@/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: Login,
});

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
