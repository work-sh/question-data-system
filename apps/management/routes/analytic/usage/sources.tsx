import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytic/usage/sources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytic/usage/sources"!</div>
}
