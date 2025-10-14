import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/database/sources/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/database/sources/create"!</div>
}
