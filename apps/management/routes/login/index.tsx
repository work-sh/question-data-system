import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/LoginForm"

export const Route = createFileRoute('/login/')({
  component: Login,
})

function Login() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
