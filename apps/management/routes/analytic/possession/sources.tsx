import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/analytic/possession/sources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/analytic/possession/sources"!</div>
}
