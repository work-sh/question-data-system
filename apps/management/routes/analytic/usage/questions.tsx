import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytic/usage/questions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytic/usage/questions"!</div>
}
