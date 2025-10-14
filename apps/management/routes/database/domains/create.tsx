import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/database/domains/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/database/domains/create"!</div>
}
