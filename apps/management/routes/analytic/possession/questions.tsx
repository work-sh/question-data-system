import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytic/possession/questions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytic/possession/questions"!</div>
}
